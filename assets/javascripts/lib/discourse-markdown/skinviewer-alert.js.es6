import { registerOption } from "pretty-text/pretty-text";

registerOption((siteSettings, opts) => {
  opts.features["skinviewer-alert"] = !!siteSettings.skinview_enabled;
});

const CONTAINS_BLOCK_REGEX = /\n|<img|!\[[^\]]*\][(\[]/;

function insertSkinviewer(_, skinviewer) {
  const element = CONTAINS_BLOCK_REGEX.test(skinviewer) ? "div" : "span";
  return `<${element} class='skinviewer'>${skinviewer}</${element}>`;
}

function replaceSkinviewer(text) {
  text = text || "";
  while (
    text !==
    (text = text.replace(
      /\[skinviewer\]((?:(?!\[skinviewer\]|\[\/skinviewer\])[\S\s])*)\[\/skinviewer\]/gi,
      insertSkinviewer
    ))
  );
  return text;
}

function setupMarkdownIt(helper) {
  helper.registerOptions((opts, siteSettings) => {
    opts.features["skinviewer-alert"] = !!siteSettings.skinview_enabled;
  });

  helper.registerPlugin(md => {
    md.inline.bbcode.ruler.push("skinviewer", {
      tag: "skinviewer",
      wrap: "span.skinviewer"
    });

    md.block.bbcode.ruler.push("skinviewer", {
      tag: "skinviewer",
      wrap: "div.skinviewer"
    });
  });
}

export function setup(helper) {
  helper.whiteList(["span.skinviewer", "div.skinviewer"]);
  if (helper.markdownIt) {
    setupMarkdownIt(helper);
  } else {
    helper.addPreProcessor(replaceSkinviewer);
  }
}
