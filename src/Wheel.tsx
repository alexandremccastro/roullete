import { useEffect, useState } from "react";
import Item, { EItemColor, ItemProps } from "./Item";

export const rollWheel = (target: number, durationInSeconds = 2) => {
  let wheel: HTMLElement = document.querySelector(
    ".wheel"
  ) as unknown as HTMLElement;

  const order = [0, 11, 5, 10, 6, 9, 7, 8, 1, 14, 2, 13, 3, 12, 4];

  const position = order.indexOf(target);

  const rows = 12;
  const card = 82 + 8 * 2;
  var landingPosition = rows * order.length * card + position * card;

  wheel.style.transitionTimingFunction = "cubic-bezier(0.075, 0.82, 0.165, 1)";
  wheel.style.transitionDuration = `${durationInSeconds}s`;
  wheel.style.transform = `translate3d(-${landingPosition}px, 0px, 0px)`;

  setTimeout(() => {
    const resetTo = rows * order.length * card;
    wheel.style.transform = `translate3d(${resetTo}px, 0px, 0px)`;
    wheel.style.transitionTimingFunction = "";
    wheel.style.transitionDuration = "1s";
  }, (durationInSeconds + 2) * 1000);
};

const wheelItems = [
  {
    color: EItemColor.RED,
    number: 1,
  },
  {
    color: EItemColor.BLACK,
    number: 14,
  },
  {
    color: EItemColor.RED,
    number: 2,
  },
  {
    color: EItemColor.BLACK,
    number: 13,
  },
  {
    color: EItemColor.RED,
    number: 3,
  },
  {
    color: EItemColor.BLACK,
    number: 12,
  },
  {
    color: EItemColor.RED,
    number: 4,
  },
  {
    color: EItemColor.GREEN,
    number: 0,
  },
  {
    color: EItemColor.RED,
    number: 11,
  },
  {
    color: EItemColor.BLACK,
    number: 5,
  },
  {
    color: EItemColor.RED,
    number: 10,
  },
  {
    color: EItemColor.BLACK,
    number: 6,
  },
  {
    color: EItemColor.RED,
    number: 9,
  },
  {
    color: EItemColor.BLACK,
    number: 7,
  },
  {
    color: EItemColor.RED,
    number: 8,
  },
];

const Wheel = () => {
  const [items, setItems] = useState<ItemProps[]>([]);

  useEffect(() => {
    let items: ItemProps[] = [];

    for (let i = 0; i <= 28; i++) {
      items.push(...wheelItems);
    }

    setItems(items);
  }, []);

  return (
    <>
      <div className={"wheel"}>
        {items?.map((item, idx) => (
          <Item key={idx} color={item.color} number={item.number} />
        ))}
      </div>

      <div className={"pointer"}></div>
    </>
  );
};

export default Wheel;
