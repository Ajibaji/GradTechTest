
function createMenuData(data) {

  for (i=0; i<data.length; i++) {
    var splitter = data[i].split("/");
    const parent = splitter[0];
    if (splitter[1]) {
      const child = splitter[1];
      children.push(child);
    }
    if (!parents.includes(parent)){
      parents.push(parent);
    }
  };

  for (i=0; i<parents.length;i++) {
    const parent = parents[i];
    var family = {title:parent, data:[]};
    for (x=0; x<children.length; x++) {
      const child = children[x];
      if (child.includes(parent)){
        family.data.push(child);
      }
    }
    families.push(family);
  }
  console.log(children);
  return families;
}

var parents = [];
var children = [];
var families = [];

const data = [
  "parent1/parent1child",
  "parent1/parent1child2",
  "parent2/parent2child",
  "parent2/parent2child2",
  "parent1/parent1child3",
  "parent3",
  "parent3/parent3child1",
  "parent4"
];

const actualResult = createMenuData(data);
