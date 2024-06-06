import { useEffect, useState } from "react";
import Wheel, { rollWheel } from "./Wheel";

const Roullete = () => {
  const [target, setTarget] = useState(0);
  const [duration, setDuration] = useState(2);

  return (
    <>
      <div className={"roullete"}>
        <Wheel />
      </div>

      <div className={"trigger"}>
        <label>
          Target:{" "}
          <select
            aria-label="Target"
            onChange={(e) => setTarget(+e.target.value)}
          >
            <option value={1}>1 (RED)</option>
            <option value={14}>14 (BLACK)</option>
            <option value={2}>2 (RED)</option>
            <option value={13}>13 (BLACK)</option>
            <option value={3}>3 (RED)</option>
            <option value={12}>12 (BLACK)</option>
            <option value={4}>4 (RED)</option>
            <option selected={true} value={0}>
              0 (GREEN)
            </option>
            <option value={11}>11 (RED)</option>
            <option value={5}>5 (BLACK)</option>
            <option value={10}>10 (RED)</option>
            <option value={6}>6 (BLACK)</option>
            <option value={9}>9 (RED)</option>
            <option value={7}>7 (BLACK)</option>
            <option value={8}>8 (RED)</option>
          </select>
        </label>

        <label>
          Duration:{" "}
          <select onChange={(e) => setDuration(+e.target.value)}>
            <option value={1}>1s</option>
            <option value={2}>2s</option>
            <option value={3}>3s</option>
            <option value={4}>4s</option>
            <option value={5}>5s</option>
          </select>
        </label>

        <button onClick={() => rollWheel(target, duration)}>Roll Wheel</button>
      </div>
    </>
  );
};

export default Roullete;
