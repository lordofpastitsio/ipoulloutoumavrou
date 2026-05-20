# Add Your 3D Models Here

## Supported formats:
- .glb (recommended)
- .gltf
- .obj

## How to add a 3D model:

1. Place your .glb or .gltf files in this folder
2. Update data.js with the file path
3. Use this HTML structure in index.html:

```html
<a-marker type="barcode" value="0">
    <a-entity 
        gltf-model="url(models/your-model.glb)"
        scale="0.5 0.5 0.5"
        position="0 0 0"
        rotation="0 0 0">
    </a-entity>
    <a-text value="BUILDING NAME" position="0 2 0" color="#FFD700" align="center" scale="0.6 0.6 0.6"></a-text>
</a-marker>
