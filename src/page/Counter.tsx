import {
  decrement,
  decrementByAmount,
  increment,
  incrementByAmount,
  reset,
} from "../redux/features/counter/counterSlice";
import { useAppDispatch, useAppSelector } from "../redux/hook";
import { RootState } from "../redux/store";

export default function Counter() {
  const { count } = useAppSelector((state: RootState) => state.counter);
  const dispatch = useAppDispatch();
  return (
    <div className="h-screen flex items-center justify-center">
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body items-center text-center">
          <h2 className="font-bold text-6xl mb-20">{count}</h2>
          <div className="card-actions">
            <button
              className="btn btn-active btn-primary"
              onClick={() => dispatch(decrementByAmount(5))}
            >
              -5
            </button>
            <button
              className="btn btn-active btn-secondary"
              onClick={() => dispatch(increment())}
            >
              Increment
            </button>
            <button
              className="btn btn-active btn-primary"
              onClick={() => dispatch(decrement())}
            >
              Decrement
            </button>
            <button
              className="btn btn-outline btn-error"
              onClick={() => dispatch(reset())}
            >
              Reset
            </button>
            <button
              className="btn btn-active btn-primary"
              onClick={() => dispatch(incrementByAmount(+5))}
            >
              +5
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
