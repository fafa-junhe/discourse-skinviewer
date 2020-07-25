import { withPluginApi } from "discourse/lib/plugin-api";
import { Tag } from "discourse/lib/to-markdown";
import ComposerController from "discourse/controllers/composer";
function skind($elem) {
  $(".skinviewer", $elem)
    .skind();
}
function initializeSkinviewer(api) {
  console.log($("#skinviewer"))
    api.decorateCooked(skind, { id: "skinviewer" });
api.decorateCooked($elem =>
	$elem
		.children('div[id="skinviewer"]')
		// do your work here for example:
		.imagesLoaded(function() {
      let skin = $("#skin_container")
          if(skin.length){
    if(skin.children().length === 0){
    if(skin.parent().children().first().children().hasClass("d-lazyload-hidden")){
      skin = skin.prev().first().children().first().next()[0].src;
    }
    else{
      skin = skin.prev().first().children().first()[0].src;
    }
    let skinViewer = new skinview3d.SkinViewer(document.getElementById("skin_container"), {
    width: 300,
    height: 400,
    skin : skin
 });
  skinViewer.width = 600;
  skinViewer.height = 800;
 let control = skinview3d.createOrbitControls(skinViewer);
  control.enableRotate = true;
 control.enableZoom = true;
  control.enablePan = true;
 let walk = skinViewer.animations.add(skinview3d.WalkingAnimation);
 let rotate = skinViewer.animations.add(skinview3d.RotatingAnimation);

		}}}))
  // code block to be executed
// TopicRoute.reopen({
//
//  })}});


  api.addToolbarPopupMenuOptionsCallback(() => {
    return {
      action: "insertSkinviewer",
      icon: "cubes",
      label: "skinviewer.title"
    };
  });

  ComposerController.reopen({
    actions: {
      insertSkinviewer() {
        this.get("toolbarEvent").applySurround(
          "[skinviewer]",
          "[/skinviewer]",
          "skin_text",
          { multiline: false, useBlockMode: true }
        );
      }
    }
  });

  if (Tag) {
    Tag.prototype.decorate = function(text) {
      const attr = this.element.attributes;
      if (attr.class === "skinviewer") {
        this.prefix = "[skinviewer]";
        this.suffix = "[/skinviewer]";
      }

      if (this.prefix || this.suffix) {
        text = [this.prefix, text, this.suffix].join("");
      }

      if (this.inline) {
        text = " " + text + " ";
      }

      return text;
    };

    Tag.block = function(name, prefix, suffix) {
      return class extends Tag {
        constructor() {
          super(name, prefix, suffix);
          this.gap = "\n\n";
        }

        decorate(text) {
          const attr = this.element.attributes;
          const parent = this.element.parent;

          if (this.name === "p" && parent && parent.name === "li") {
            // fix for google docs
            this.gap = "";
          }

          if (this.name === "div" && attr.class === "skinviewer") {
            this.prefix = "[skinviewer]";
            this.suffix = "[/skinviewer]";
            text = text.trim();
          }

          return `${this.gap}${this.prefix}${text}${this.suffix}${this.gap}`;
        }
      };
    };
  }
}

export default {
  name: "apply-skinviewer",
  initialize(container) {
    const siteSettings = container.lookup("site-settings:main");
    if (siteSettings.skinview_enabled) {
      withPluginApi("0.5", initializeSkinviewer);
    }
  }
};
