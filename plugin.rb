# frozen_string_literal: true

# name: discourse-skinviewer
# about: minecraft 3d Skin viewer
# version: 0.4
# authors: fafa_junhe
# url:

enabled_site_setting :skinview_enabled

register_asset "javascripts/skinviewer.js"
register_asset "javascripts/skinview3d.bundle.js.es5"
register_asset "javascripts/imagesloaded.min.js"
after_initialize do

  on(:reduce_cooked) do |fragment, post|
    fragment.css(".skinviewer").each do |el|
      link = fragment.document.create_element("a")
      link["href"] = post.url
      link.content = I18n.t("skinviewer_alert.excerpt_spoiler")
      el.inner_html = link.to_html
    end
  end

  # Remove spoilers from topic exerpts
  on(:reduce_excerpt) do |doc, post|
    doc.css(".skinviewer").remove
  end

end
