class SlottableItem {
  name = 'slottable';

  constructor() {
    console.log('super constructor');
  }

  turnOn() {
    console.log('starting up');
  }
}

class BadItem extends SlottableItem {
  turnOn() {
    console.log('not bad anymore');
  }
}

//       child                parent
//      subclass             superclass
class GraphicsCard extends SlottableItem {
  turnOn() {
    super.turnOn();
    console.log(this.name, 'show pretty pictures');
  }
}

class SoundCard extends SlottableItem {
  turnOn() { console.log('sound card'); }
}

class UsbAdapter extends SlottableItem {
  turnOn() { console.log('use usbs'); }
}

let slottableItems = [new BadItem(), new GraphicsCard(), new SoundCard(), new UsbAdapter()];

const startUpSequence = () => {
  slottableItems.forEach(item => item.turnOn());
};

startUpSequence();