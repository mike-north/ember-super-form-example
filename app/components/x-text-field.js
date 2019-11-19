import Component from "@ember/component";
import { computed } from "@ember/object";

export default Component.extend({
  classNames: ["x-text-field"],
  value: "",
  charCount: computed("value", function() {
    return this.get("value").length;
  })
});
