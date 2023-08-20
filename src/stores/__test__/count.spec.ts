import { createPinia, setActivePinia } from "pinia";
import { beforeEach, describe, expect, test, vi } from "vitest";

import { useCount } from "@/stores/count";

let count;
describe("useCount Testing", () => {
  beforeEach(() => {
    setActivePinia(createPinia());
    count = useCount();
  });

  test("count init", () => {
    const count = useCount();
    expect(count.count).toBe(0);
    expect(count.str).toBe("a");

    count.increment();

    expect(count.count).toBe(1);
    expect(count.str).toBe("aa");
  });

  test("spy increment", () => {
    const count = useCount();
    const spy = vi.spyOn(count, "increment");

    count.increment();

    expect(spy).toBeCalled();
  });

  test("spy decrement", () => {
    const count = useCount();
    const spy = vi.spyOn(count, "decrement");

    count.decrement();

    expect(spy).toBeCalled();
  });
});
