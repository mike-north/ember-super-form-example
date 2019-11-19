import Ember from "ember";

const { computed } = Ember;

/**
 * Transform a triplet of r, g, b color values
 * (each of which can have a value from 0 - 255),
 * into a single hex color string. r, g and b
 * may be either strings or integers.
 *
 * Example: rgbToHex(255, 255, 0) === 'ffff00'
 */
export function rgbToHex(r, g, b) {
  return [r, g, b]
    .map(c => parseInt(c, 10).toString(16))
    .map(c => (c.length < 2 ? `0${c}` : c))
    .join("");
}

/**
 * Transform a hex color string into an object
 * containing three 8-bit (0 - 255) color values
 * (converted to strings)  for red, green and blue.
 *
 * Example:  JSON.stringify(hexToRgb('ff0000')) === {r: '255', g: '0', b: '0'}
 */
export function hexToRgb(hex) {
  return {
    r: parseInt(hex.substring(0, 2), 16).toString(),
    g: parseInt(hex.substring(2, 4), 16).toString(),
    b: parseInt(hex.substring(4, 6), 16).toString()
  };
}

/**
 * A settable computed property macro that
 * allows us to represent three 8-bit (0 - 255)
 * color channels as a single hex color value.
 *
 * Example:
 *
 *    let ColorPicker = Ember.Object.extend({
 *      hex: hexColor('red', 'green', 'blue')
 *    });
 *
 *    let myPicker = ColorPicker.create({
 *      red: '255',
 *      green: '0',
 *      blue: '0'
 *    });
 *    myPicker.get('hex') === 'ff0000';
 *    myPicker.set('green', '255');
 *    myPicker.get('hex') === 'ffff00';
 *
 */
export default function hexColor(rPropName, gPropName, bPropName) {
  // This is a temporary value. Replace this with a computed property
  return computed(rPropName, gPropName, bPropName, {
    get() {
      return rgbToHex(
        this.get(rPropName),
        this.get(gPropName),
        this.get(bPropName)
      );
    },
    set(key, hex) {
      let { r, g, b } = hexToRgb(hex);
      this.set(rPropName, r);
      this.set(gPropName, g);
      this.set(bPropName, b);
      return hex;
    }
  });
}
