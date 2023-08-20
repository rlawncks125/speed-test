import { VueWrapper, shallowMount } from "@vue/test-utils";
import NewCompoVue from "@/components/NewCompo.vue";

import { beforeEach, describe, expect, it } from "vitest";

let wrapper: VueWrapper<any>;
describe("New Compo", () => {
  beforeEach(() => {
    wrapper = shallowMount(NewCompoVue);
  });

  it("new Compo test", () => {
    expect(wrapper.text()).toContain("newCompo");
  });
});
