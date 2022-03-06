import { shallowMount, mount } from "@vue/test-utils";
import Notas from "@/components/Notas.vue";

describe("Notas", () => {
  it("Rendering component", () => {
    const wrapper = shallowMount(Notas);
    expect(wrapper.exists()).toBe(true);
    expect(wrapper.html()).toContain("Nota incorrecta");
    //expect(wrapper.attributes("class")).toBe("font-weight-bold");
    expect(wrapper.text()).toMatch("Introducción de datos");
  });
  /* it("Rendering input name", () => {
    const wrapper = mount(Notas);
    const vTextField = wrapper.get("v-text-field");
    //expect(vTextField.attributes("v-model")).toBe("name");
  }); */
  it("Show name in boletin", async () => {
    const wrapper = mount(Notas);
    await wrapper.find("input").setValue("Luis");
  });

});
