//just a sample test of one of the script.js functions
function toggle_visibility(i) {
    var visible = [false, false, false, false];
    visible[i] = true;
    if (visible[i]) {
        if (i != 0) {
            visible[0] = false;
        }
        if (i != 1) {
            visible[1] = false;
        }
        if (i != 2) {
            visible[2] = false;
        }
        if (i != 3) {
            visible[3] = false;
        }
    }
    return visible;
}

describe("visibility toggler", function () {
    it("should set one to true and the oters to false", function () {
        var v = toggle_visibility(1);
        expect(v[0]).toBe(false);
        expect(v[1]).toBe(true);
        expect(v[2]).toBe(false);
        expect(v[3]).toBe(false);
    });
});
