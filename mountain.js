var Kilimanjaro = {
    Name: "Kilimanjaro",
    Height: 19341
};
var Everest = {
    Name: "Everest",
    Height: 29029
};
var Denali = {
    Name: "Denali",
    Height: 20310
};
var mountains;
mountains = [Kilimanjaro, Everest, Denali];
function findNameOfTallestMountain(mount) {
    var tallestmountain = mount.find(function (x) { return x.Height === Math.max(x.Height); }) || mount[0];
    console.log(tallestmountain);
    return tallestmountain.Name;
}
