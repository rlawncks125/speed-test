import TestCom from "@/components/testCom.vue";
import { shallowMount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";

describe("testCom", () => {
  it("render", () => {
    const wp = shallowMount(TestCom);

    expect(wp.text()).toContain("TestCom");
  });
});
