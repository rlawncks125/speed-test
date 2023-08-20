import { VueWrapper, shallowMount } from "@vue/test-utils";
import { setActivePinia, createPinia } from "pinia";

import Count from "@/components/count.vue";
import { useCount } from "@/stores/count";

import NewCompo from "@/components/NewCompo.vue";
import { beforeEach, describe, expect, it } from "vitest";
import { nextTick } from "vue";

let wrapper: VueWrapper;

describe("count Compoent Testing", () => {
  beforeEach(() => {
    // 피니아 설정
    setActivePinia(createPinia());
    wrapper = shallowMount(Count, {
      global: {
        components: {
          NewCompo,
        },
      },
    });
  });

  it("render Test", () => {
    expect(wrapper.text()).toContain(`count`);
  });

  it("useCounter Increment Render", async () => {
    const count = useCount();

    let countValue = 0;

    expect(count.count).toBe(countValue);
    expect(wrapper.text()).toContain(`카운트 : ${countValue}`);
    count.increment();

    countValue = 1;
    expect(count.count).toBe(countValue);
    await nextTick();
    expect(wrapper.text()).toContain(`카운트 : ${countValue}`);
  });

  it("increment button trigger", async () => {
    const btn = wrapper.findAll("button")[0];

    btn.trigger("click");
    await nextTick();
    expect(wrapper.text()).toContain(`카운트 : 1`);
  });

  it("decrement button trigger", async () => {
    const btn = wrapper.findAll("button")[1];

    btn.trigger("click");
    await nextTick();
    expect(wrapper.text()).toContain(`카운트 : -1`);
    expect(wrapper.text()).toContain(`카운트 : -1`);
  });
});
