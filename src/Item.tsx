export enum EItemColor {
  RED = "#db4141",
  GREEN = "#3ec274",
  BLACK = "#2d4249",
}

export type ItemProps = {
  number: number;
  color: EItemColor;
};

const Item = (props: ItemProps) => {
  return (
    <div className={"item"} style={{ backgroundColor: props.color }}>
      <div className={"item-circle"}>{props.number}</div>
    </div>
  );
};

export default Item;
