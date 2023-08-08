import Layout from "../components/layout";
import TimeMachineDetail from "../components/timeMachineDetail";

const Home = () => {
  return (
    <Layout>
      <div className="grid grid-cols-3 grid-row-3 h-full gap-1 p-1  ">
        <TimeMachineDetail />
        <div className="bg-[#151618]">tes</div>
        <div className="bg-[#151618]">tes</div>
        <div className="bg-[#151618]">tes</div>
        <div className="bg-[#151618]">tes</div>
        <div className="bg-[#151618]">tes</div>
        <div className="bg-[#151618]">tes</div>
        <div className="bg-[#151618]">tes</div>
        <div className="bg-[#151618]">tes</div>
      </div>
    </Layout>
  );
};

export default Home;
