import { Outlet } from "react-router-dom";

const MainPanel = () => {
  return (
    <section id="main-panel" className="main panel" ref={elementRef}>
      <Outlet />
    </section>
  );
};

export default MainPanel;