const chai = require("chai");
const {get} = require("../support/serviceHelper");
const expect = chai.expect;


describe("testing store", async () => {
    const url = "https://jsonplaceholder.typicode.com/users"

    it("create new store", async () => {
        const response = await get(url);
        expect(response.status).to.equal(200);
    });

    it("Content-Type is present", async () => {
        const response = await get(url);
        expect(response.headers["content-type"]).to.exist;
        expect(response.headers["content-type"]).to.equal("application/json; charset=utf-8");
    });

    it("Body contains array of 10 users", async () => {
        const response = await get(url);
        expect(response.data.length).to.equal(10);
    });

})