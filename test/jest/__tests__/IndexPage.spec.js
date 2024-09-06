import IndexPage from "src/pages/IndexPage.vue";
//src\pages\IndexPage.vue
import { shallowMount } from "@vue/test-utils";

describe("IndexPage", () => {
  it("ตรวจสอบหัวข้อ (title)", () => {
    const wrapper = shallowMount(IndexPage);
    let header = wrapper.find(".htmlClass h1");
    expect(header.exists()).toBe(true);
    expect(header.text()).toBe("Vue is awesome.");
  });

  it("ตรวจสอบตัวแปรชื่อว่า title", () => {
    const wrapper = shallowMount(IndexPage, {
      data() {
        return {
          title: "Vue is awesome.",
        };
      },
    });
    let header = wrapper.find(".htmlClass h1");
    expect(header.text()).toBe("Vue is awesome.");
  });
});

test("ทดสอบว่ามี ฟอร์ม (from)", () => {
  const wrapper = shallowMount(IndexPage);
  expect(wrapper.find("form").exists()).toBe(true);
});

test("ทดสอบว่าในฟอร์ม (from) มีการรับค่า (input)", () => {
  const wrapper = shallowMount(IndexPage);
  expect(wrapper.find("form > input").exists()).toBe(true);
});

test("ทดสอบว่ามีปุ่ม (button)", () => {
  const wrapper = shallowMount(IndexPage);
  expect(wrapper.find("button").exists()).toBe(true);
});

describe("IndexPage", () => {
  it("ตรวจสอบชื่อ (firstName)", () => {
    const wrapper = shallowMount(IndexPage);
    let first_Name = wrapper.find(".htmlClass h2");
    expect(first_Name.exists()).toBe(true);
    expect(first_Name.text()).toBe("อภิไช");
  });

  it("ตรวจสอบนามสกุล (LastName)", () => {
    const wrapper = shallowMount(IndexPage, {
      data() {
        return {
          title: "โฉมทอง",
        };
      },
    });
    let LastName = wrapper.find(".htmlClass h3");
    expect(LastName.text()).toBe("โฉมทอง");
  });

  it("ตรวจสอบรหัสนักศึกษา (Studentid)", () => {
    const wrapper = shallowMount(IndexPage, {
      data() {
        return {
          title: "6604101397",
        };
      },
    });
    let LastName = wrapper.find(".htmlClass h4");
    expect(LastName.text()).toBe("6604101397");
  });

  it("ตรวจสอบชื่อเล่น (Nickname)", () => {
    const wrapper = shallowMount(IndexPage, {
      data() {
        return {
          title: "น้องฟิล์มหล่อเท่เก๋สมาร์ทสมองเนี๊ยบเฉียบปิ๊ง",
        };
      },
    });
    let LastName = wrapper.find(".htmlClass h5");
    expect(LastName.text()).toBe("น้องฟิล์มหล่อเท่เก๋สมาร์ทสมองเนี๊ยบเฉียบปิ๊ง");
  });
});
