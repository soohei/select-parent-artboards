const sketch = require('sketch')

export default function() {
  const document = sketch.getSelectedDocument();
  var selection = document.selectedLayers;
  var artboardsToSelect = [];

  selection.forEach(layer => {
    var artboard = layer.getParentArtboard();
    if (artboard) artboardsToSelect.push(artboard);
  });

  if(artboardsToSelect.length > 0) {
    selection.clear();

    artboardsToSelect.forEach(artboard => {
      artboard.selected = true;
    });
  }
}
