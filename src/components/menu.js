import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import Image from 'react-bootstrap/Image'

class Menu extends Component {
  images = {
    meats: process.env.PUBLIC_URL + "/images/ingredients/meats/Meats.gif",
    fish: process.env.PUBLIC_URL + "/images/ingredients/fish/Fishes.gif",
    vege: process.env.PUBLIC_URL + "/images/ingredients/vegetables/Vegetables.gif",
    fruit: process.env.PUBLIC_URL + "/images/ingredients/fruits/Fruit.gif",
    other: process.env.PUBLIC_URL + "/images/ingredients/other/Bugs.gif"
  };

  render() {
    return (
      <div>
        <ButtonGroup vertical>
        <Button variant="danger" size="lg">
          <Image src={this.images.meats} />
          Meats
        </Button>

        <Button variant="primary" size="lg">
          <Image src={this.images.fish} />
          Fishes
        </Button>

        <Button variant="success" size="lg">
          <Image src={this.images.vege} />
          Vegetables
        </Button>

        <Button variant="warning" size="lg">
          <Image src={this.images.fruit} />
          Fruits
        </Button>

        <Button variant="secondary" size="lg">
          <Image src={this.images.other} />
          Other viable ingredients
        </Button>
        </ButtonGroup>
      </div>
    );
  }
}

export default Menu;
