import { registerOption } from "pretty-text/pretty-text";

registerOption((siteSettings, opts) => {
  opts.features["spoiler-alert"] = !!siteSettings.spoiler_enabled;
});

const CONTAINS_BLOCK_REGEX = /\n|<img|!\[[^\]]*\][(\[]/;

function insertSpoiler(_, spoiler) {
  const element = CONTAINS_BLOCK_REGEX.test(spoiler) ? "div" : "span";
  return `<${element} class='skinviewer'>${spoiler}</${element}>`;
}

function replaceSpoilers(text) {
  text = text || "";
  while (
    text !==
    (text = text.replace(
      /\[skinviewer\]((?:(?!\[skinviewer\]|\[\/skinviewer\])[\S\s])*)\[\/skinviewer\]/gi,
      insertSpoiler
    ))
  );
  return text;
}

function setupMarkdownIt(helper) {
  helper.registerOptions((opts, siteSettings) => {
    opts.features["spoiler-alert"] = !!siteSettings.spoiler_enabled;
  });

  helper.registerPlugin(md => {
    md.inline.bbcode.ruler.push("spoiler", {
      tag: "skinviewer",
      wrap: "span.spoiler"
    });

    md.block.bbcode.ruler.push("spoiler", {
      tag: "skinviewer",
      wrap: "div.spoiler"
    });
  });
}

export function setup(helper) {
  helper.whiteList(["span.spoiler", "div.spoiler"]);

  if (helper.markdownIt) {
    setupMarkdownIt(helper);
  } else {
    helper.addPreProcessor(replaceSpoilers);
  }
}
