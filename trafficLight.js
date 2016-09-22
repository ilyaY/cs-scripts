function setRed(light) {
  light.setColor(254, 0, 0);
}

function setYellow(light) {
  light.setColor(254, 221, 0);
}

function setGreen(light) {
  light.setColor(0, 254, 0);
}

function setGray(light) {
  light.setColor(211, 211, 211);
}

function red() {
  setRed(obj.part("red"));
  setGray(obj.part("yellow"));
  setGray(obj.part("green"));
}

function yellowRed() {
  setRed(obj.part("red"));
  setYellow(obj.part("yellow"));
  setGray(obj.part("green"));
}

function yellow() {
  setGray(obj.part("red"));
  setYellow(obj.part("yellow"));
  setGray(obj.part("green"));
}

function green() {
  setGray(obj.part("red"));
  setGray(obj.part("yellow"));
  setGreen(obj.part("green"));
}

obj.red = red;
obj.yellowRed = yellowRed;
obj.yellow = yellow;
obj.green = green;