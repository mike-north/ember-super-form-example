import Component from "@ember/component";
import { computed } from "@ember/object";
import hexColor from "../utils/color";
export default Component.extend({
  classNames: ["x-color-picker-field"],
  r: 0,
  g: 0,
  b: 0,
  hex: hexColor("r", "g", "b"),

  styleString: computed("hex", function() {
    return `background-color: #${this.get("hex")}`;
  })
});
