import isText from "../src"

describe("test", () => {
  it("test true", () => {
    expect(isText("TEXT")).toBeTruthy();
  })

  it("test false", () => {
    expect(isText("TEXT")).toBeFalsy();
  })
})