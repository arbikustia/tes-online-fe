import { useEffect, useRef} from "react";
import Chart from "chart.js/auto";

const TimeMachineDetail = () => {
    const chartRef = useRef<HTMLCanvasElement | null>(null);
  const chartInstanceRef = useRef<Chart<"pie"> | null>(null);


  useEffect(() => {
    if (chartRef.current) {
      if (chartInstanceRef.current) {
        // Destroy the previous chart instance before creating a new one
        chartInstanceRef.current.destroy();
      }

      const ctx = chartRef.current.getContext("2d");
      if (ctx) {
        chartInstanceRef.current = new Chart<"pie">(ctx, {
          type: "pie",
          data: {
            datasets: [
              {
                data: [30, 40, 60], // Example data
                backgroundColor: ["red", "blue", "green"], // Example colors
              },
            ],
          },
        });
      }
    }
  }, []);

  return (
    <div className="bg-[#151618] text-white ">
          <div className="grid grid-cols-3 bg-[#151618] h-full">
            <div className="grid grid-row-3 col-span-2">
              <div className="flex flex-row justify-between px-2">
                <p className="font-semibold">Time Machine Detail</p>
                <input type="date" className="w-5 h-5" />
              </div>

              <div className="grid grid-cols-2 row-span-2 bg-[#151618]">
                <div className="w-20 flex flex-col justify-center">
                  <canvas ref={chartRef}></canvas>
                </div>

                <ul className="flex flex-col justify-center">
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-red-500 rounded-full flex items-center justify-center"></span>
                    Stop Line
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-yellow-500 rounded-full flex items-center justify-center"></span>
                    Idle
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-green-500 rounded-full flex items-center justify-center"></span>
                    Running
                  </li>
                </ul>
              </div>
            </div>

            <div className="grid grid-row-2 bg-[#151618] text-white">
              <div className="row-span-1 font-semibold">MTTR|MTBF</div>
              <div className=" row-span-2 w-full bg-blue-500 grid grid-row-3 p-1">
                <a className="text-[8px]">MTTR</a>
                <a className="text-[10px]">1,020 Hours</a>
                <div className="text-[12px]">
                  <a>1,31 Hours</a>
                  <a>Target MTTR</a>
                </div>
              </div>
              <div className=" row-span-2 w-full bg-green-500 grid grid-row-3 p-1">
                <a className="text-[8px]">MTTR</a>
                <a className="text-[10px]">150,8 Hours</a>
                <div className="text-[12px]">
                  <a>199,8 Hours</a>
                  <a>Target MTBF</a>
                </div>
              </div>
            </div>
          </div>
        </div>
  )
}

export default TimeMachineDetail