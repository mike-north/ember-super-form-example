import Component from "@ember/component";

export default Component.extend({
  classNames: ["x-form"],
  actions: {
    handleSubmit(e) {
      e.preventDefault();
    }
  }
});
