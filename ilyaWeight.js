function dist1(obj1, obj2) {
  var dx = obj1.x - obj2.x;
  var dy = obj1.y - obj2.y;
  return Math.sqrt(dx*dx + dy*dy);
}
var ME_KOEF = 12;
var OP_KOEF = 6;
var DIST_DIFF_KOEF = 0.4;
var P_KOEF = 3;

function maxWeight() {
  var pos = env.getPosition();
  var opPos = env.getOpponentPosition();
  var items = env.getTargets();
  var max = -10000;
  var index = -1;
  for (var i = 0; i < items.length; i++) {
    var myDist = dist1(pos, items[i]);
    var opDist = dist1(opPos, items[i]);
    var weight = ME_KOEF / myDist;
    if (opDist < myDist) {
      weight -= OP_KOEF / opDist;
    } else {
      weight += DIST_DIFF_KOEF / Math.max(opDist - myDist, 1);
    }
    for (var j = 0; j < items.length; j++) {
      if (i == j) continue;
      var aimDist = dist1(items[i], items[j]);
      aimDist = Math.max(aimDist, 1);
      weight += P_KOEF / aimDist;
    }
    if (weight > max) {
      max = weight;
      index = i;
    }
  }
  return items[index];
}

var target = maxWeight();
if (target != null) {
  var pos = env.getPosition();
  env.move(target.x - pos.x, target.y - pos.y);
}

