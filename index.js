var $5yMRr$reactjsxdevruntime = require("react/jsx-dev-runtime");
var $5yMRr$reactdom = require("react-dom");
var $5yMRr$react = require("react");

function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}


var $f8423c45d610b44e$exports = {};

$parcel$export($f8423c45d610b44e$exports, "default", () => $f8423c45d610b44e$export$2e2bcd8739ae039, (v) => $f8423c45d610b44e$export$2e2bcd8739ae039 = v);


var $6e03ea5f608996b5$exports = {};

$parcel$export($6e03ea5f608996b5$exports, "default", () => $6e03ea5f608996b5$export$2e2bcd8739ae039, (v) => $6e03ea5f608996b5$export$2e2bcd8739ae039 = v);

const $6e03ea5f608996b5$var$Pet = (props)=>{
    return /*#__PURE__*/ (0, $5yMRr$reactjsxdevruntime.jsxDEV)("div", {
        children: [
            /*#__PURE__*/ (0, $5yMRr$reactjsxdevruntime.jsxDEV)("h1", {
                children: props.name
            }, void 0, false, {
                fileName: "C:\\Users\\Caleb\\Documents\\Git\\mtl-app\\src\\Pet.js",
                lineNumber: 4,
                columnNumber: 7
            }, undefined),
            /*#__PURE__*/ (0, $5yMRr$reactjsxdevruntime.jsxDEV)("h2", {
                children: props.animal
            }, void 0, false, {
                fileName: "C:\\Users\\Caleb\\Documents\\Git\\mtl-app\\src\\Pet.js",
                lineNumber: 5,
                columnNumber: 7
            }, undefined),
            /*#__PURE__*/ (0, $5yMRr$reactjsxdevruntime.jsxDEV)("h2", {
                children: props.breed
            }, void 0, false, {
                fileName: "C:\\Users\\Caleb\\Documents\\Git\\mtl-app\\src\\Pet.js",
                lineNumber: 6,
                columnNumber: 7
            }, undefined)
        ]
    }, void 0, true, {
        fileName: "C:\\Users\\Caleb\\Documents\\Git\\mtl-app\\src\\Pet.js",
        lineNumber: 3,
        columnNumber: 5
    }, undefined);
};
var $6e03ea5f608996b5$export$2e2bcd8739ae039 = $6e03ea5f608996b5$var$Pet;


const $f8423c45d610b44e$var$ANIMALS = [
    "bird",
    "cat",
    "dog",
    "rabbit",
    "reptile"
];
const $f8423c45d610b44e$var$SearchParams = ()=>{
    const [location, updateLocation] = (0, $5yMRr$react.useState)("");
    const [animal1, updateAnimal] = (0, $5yMRr$react.useState)("");
    const [breed1, updateBreed] = (0, $5yMRr$react.useState)("");
    const [pets, setPets] = (0, $5yMRr$react.useState)([]);
    const breeds = [];
    (0, $5yMRr$react.useEffect)(()=>{
        requestPets();
    }, []); // eslint-disable-line react-hooks/exhaustive-deps
    async function requestPets() {
        const res = await fetch(`http://pets-v2.dev-apis.com/pets?animal=${animal1}&location=${location}&breed=${breed1}`);
        const json = await res.json();
        setPets(json.pets);
    }
    return /*#__PURE__*/ (0, $5yMRr$reactjsxdevruntime.jsxDEV)("div", {
        className: "search-params",
        children: [
            /*#__PURE__*/ (0, $5yMRr$reactjsxdevruntime.jsxDEV)("form", {
                children: [
                    /*#__PURE__*/ (0, $5yMRr$reactjsxdevruntime.jsxDEV)("label", {
                        htmlFor: "location",
                        children: [
                            "Location",
                            /*#__PURE__*/ (0, $5yMRr$reactjsxdevruntime.jsxDEV)("input", {
                                id: "location",
                                value: location,
                                placeholder: "Location",
                                onChange: (e)=>updateLocation(e.target.value)
                            }, void 0, false, {
                                fileName: "C:\\Users\\Caleb\\Documents\\Git\\mtl-app\\src\\SearchParams.js",
                                lineNumber: 31,
                                columnNumber: 11
                            }, undefined)
                        ]
                    }, void 0, true, {
                        fileName: "C:\\Users\\Caleb\\Documents\\Git\\mtl-app\\src\\SearchParams.js",
                        lineNumber: 29,
                        columnNumber: 9
                    }, undefined),
                    /*#__PURE__*/ (0, $5yMRr$reactjsxdevruntime.jsxDEV)("label", {
                        htmlFor: "animal",
                        children: [
                            "Animal",
                            /*#__PURE__*/ (0, $5yMRr$reactjsxdevruntime.jsxDEV)("select", {
                                id: "animal",
                                value: animal1,
                                onChange: (e)=>{
                                    updateAnimal(e.target.value);
                                    updateBreed("");
                                },
                                onBlur: (e)=>{
                                    updateAnimal(e.target.value);
                                    updateBreed("");
                                },
                                children: [
                                    /*#__PURE__*/ (0, $5yMRr$reactjsxdevruntime.jsxDEV)("option", {}, void 0, false, {
                                        fileName: "C:\\Users\\Caleb\\Documents\\Git\\mtl-app\\src\\SearchParams.js",
                                        lineNumber: 52,
                                        columnNumber: 13
                                    }, undefined),
                                    $f8423c45d610b44e$var$ANIMALS.map((animal)=>/*#__PURE__*/ (0, $5yMRr$reactjsxdevruntime.jsxDEV)("option", {
                                            value: animal,
                                            children: animal
                                        }, animal, false, {
                                            fileName: "C:\\Users\\Caleb\\Documents\\Git\\mtl-app\\src\\SearchParams.js",
                                            lineNumber: 54,
                                            columnNumber: 15
                                        }, undefined))
                                ]
                            }, void 0, true, {
                                fileName: "C:\\Users\\Caleb\\Documents\\Git\\mtl-app\\src\\SearchParams.js",
                                lineNumber: 40,
                                columnNumber: 11
                            }, undefined)
                        ]
                    }, void 0, true, {
                        fileName: "C:\\Users\\Caleb\\Documents\\Git\\mtl-app\\src\\SearchParams.js",
                        lineNumber: 38,
                        columnNumber: 9
                    }, undefined),
                    /*#__PURE__*/ (0, $5yMRr$reactjsxdevruntime.jsxDEV)("label", {
                        htmlFor: "breed",
                        children: [
                            "Breed",
                            /*#__PURE__*/ (0, $5yMRr$reactjsxdevruntime.jsxDEV)("select", {
                                disabled: !breeds.length,
                                id: "breed",
                                value: breed1,
                                onChange: (e)=>updateBreed(e.target.value),
                                onBlur: (e)=>updateBreed(e.target.value),
                                children: [
                                    /*#__PURE__*/ (0, $5yMRr$reactjsxdevruntime.jsxDEV)("option", {}, void 0, false, {
                                        fileName: "C:\\Users\\Caleb\\Documents\\Git\\mtl-app\\src\\SearchParams.js",
                                        lineNumber: 69,
                                        columnNumber: 13
                                    }, undefined),
                                    breeds.map((breed)=>/*#__PURE__*/ (0, $5yMRr$reactjsxdevruntime.jsxDEV)("option", {
                                            value: breed,
                                            children: breed
                                        }, breed, false, {
                                            fileName: "C:\\Users\\Caleb\\Documents\\Git\\mtl-app\\src\\SearchParams.js",
                                            lineNumber: 71,
                                            columnNumber: 15
                                        }, undefined))
                                ]
                            }, void 0, true, {
                                fileName: "C:\\Users\\Caleb\\Documents\\Git\\mtl-app\\src\\SearchParams.js",
                                lineNumber: 62,
                                columnNumber: 11
                            }, undefined)
                        ]
                    }, void 0, true, {
                        fileName: "C:\\Users\\Caleb\\Documents\\Git\\mtl-app\\src\\SearchParams.js",
                        lineNumber: 60,
                        columnNumber: 9
                    }, undefined),
                    /*#__PURE__*/ (0, $5yMRr$reactjsxdevruntime.jsxDEV)("button", {
                        children: "Submit"
                    }, void 0, false, {
                        fileName: "C:\\Users\\Caleb\\Documents\\Git\\mtl-app\\src\\SearchParams.js",
                        lineNumber: 77,
                        columnNumber: 9
                    }, undefined)
                ]
            }, void 0, true, {
                fileName: "C:\\Users\\Caleb\\Documents\\Git\\mtl-app\\src\\SearchParams.js",
                lineNumber: 28,
                columnNumber: 7
            }, undefined),
            pets.map((pet)=>/*#__PURE__*/ (0, $5yMRr$reactjsxdevruntime.jsxDEV)((0, $6e03ea5f608996b5$exports.default), {
                    name: pet.name,
                    animal: pet.animal,
                    breed: pet.breed
                }, pet.id, false, {
                    fileName: "C:\\Users\\Caleb\\Documents\\Git\\mtl-app\\src\\SearchParams.js",
                    lineNumber: 80,
                    columnNumber: 9
                }, undefined))
        ]
    }, void 0, true, {
        fileName: "C:\\Users\\Caleb\\Documents\\Git\\mtl-app\\src\\SearchParams.js",
        lineNumber: 27,
        columnNumber: 5
    }, undefined);
};
var $f8423c45d610b44e$export$2e2bcd8739ae039 = $f8423c45d610b44e$var$SearchParams;


const $abf42df8d227c05b$var$App = ()=>{
    return /*#__PURE__*/ (0, $5yMRr$reactjsxdevruntime.jsxDEV)("div", {
        children: [
            /*#__PURE__*/ (0, $5yMRr$reactjsxdevruntime.jsxDEV)("h1", {
                children: "Adopt Me!"
            }, void 0, false, {
                fileName: "C:\\Users\\Caleb\\Documents\\Git\\mtl-app\\src\\App.js",
                lineNumber: 7,
                columnNumber: 7
            }, undefined),
            /*#__PURE__*/ (0, $5yMRr$reactjsxdevruntime.jsxDEV)((0, $f8423c45d610b44e$exports.default), {}, void 0, false, {
                fileName: "C:\\Users\\Caleb\\Documents\\Git\\mtl-app\\src\\App.js",
                lineNumber: 8,
                columnNumber: 7
            }, undefined)
        ]
    }, void 0, true, {
        fileName: "C:\\Users\\Caleb\\Documents\\Git\\mtl-app\\src\\App.js",
        lineNumber: 6,
        columnNumber: 5
    }, undefined);
};
(0, $5yMRr$reactdom.render)(/*#__PURE__*/ (0, $5yMRr$reactjsxdevruntime.jsxDEV)($abf42df8d227c05b$var$App, {}, void 0, false, {
    fileName: "C:\\Users\\Caleb\\Documents\\Git\\mtl-app\\src\\App.js",
    lineNumber: 13,
    columnNumber: 8
}, undefined), document.getElementById("root"));


//# sourceMappingURL=index.js.map
