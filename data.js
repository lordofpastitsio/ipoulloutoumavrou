// data.js - Store ALL your building information here

export const buildingsData = {
    // Each marker number must match your HTML markers
    "0": {
        name: "Limassol Castle",
        period: "13th Century | Medieval",
        description: "Built by the Lusignans in the 13th century. Richard the Lionheart married Berengaria of Navarre here in 1191. Now houses the Cyprus Medieval Museum.",
        aiContext: "Limassol Castle is a medieval castle in Limassol, Cyprus. It was built in the 13th century and is known for being the location of Richard the Lionheart's wedding."
    },
    "1": {
        name: "Kolossi Castle",
        period: "1210 AD | Crusader",
        description: "Former Crusader stronghold built by Knights of St. John. Famous for producing Commandaria wine, one of the world's oldest wines.",
        aiContext: "Kolossi Castle is a Crusader castle near Limassol. It was built in 1210 and is known for Commandaria wine production."
    }
    // Add all your buildings here
};

// 3D Model configuration
export const modelConfig = {
    // Map marker numbers to 3D model files
    "0": {
        type: "gltf",
        url: "models/limassol-castle.glb",  // Your GLTF/GLB file path
        scale: "1 1 1",
        position: "0 0 0"
    },
    "1": {
        type: "gltf",
        url: "models/kolossi-castle.glb",
        scale: "1 1 1",
        position: "0 0 0"
    }
};
