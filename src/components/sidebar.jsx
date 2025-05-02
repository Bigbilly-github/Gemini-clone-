import { useState } from "react"
import { assets } from "../assets/assets"

function Sidebar (){

    const [decider, setDecider] = useState(false);

    function ShowSidebarDetails (){
        setDecider(!decider);
    }

    return(
        <>
        <section>
            <div className="sidebar  inline-flex min-h-[100vh] flex-col justify-between bg-[#f0f4f9] py-[25px] px-[15px]">
                <div>
                    <img src={assets.menu_icon} onClick={ShowSidebarDetails}  alt="menu icon" className="block ml-[10px] cursor-pointer" />
                    <div className="mt-[50px] inline-flex items-center gap-[10px] py-[10px] px-[15px] bg-[#e6eaf1] rounded-[50px] text-[14px] text-[grey]  cursor-pointer ">
                        <img src={assets.plus_icon} alt="plus icon" />
                      <p className={`${decider ? "block": "hidden"}`}>
                            New Chat
                        </p>

                    </div>
                    <div className={`${decider ? "block": "hidden"} flex flex-col `}>
                        <p className=" mt-[30px] mb-[20px] ">
                            Recent
                        </p>
                        <div className="flex items-start gap-[10px] p-[10px] hover:bg-[#e2e6eb] pr-[40px] rounded-[50px] text-[#282828]  cursor-pointer">
                            <img src={assets.message_icon} alt="message icon" />
                            <p >
                                What is react ... 
                            </p>
                        </div>
                    </div>

                </div>
                <div className="flex  flex-col ">
                     <div className="bottom-item flex items-start gap-[10px] p-[10px] hover:bg-[#e2e6eb] pr-[40px] rounded-[50px] text-[#282828]  cursor-pointer">
                        <img src={assets.question_icon} alt="question icon" />
                        <p className={`${decider ? "block": "hidden"}`}>
                            Help
                        </p>
                    </div>
                    <div className="bottom-item flex items-start gap-[10px] p-[10px] hover:bg-[#e2e6eb] pr-[40px] rounded-[50px] text-[#282828]  cursor-pointer">
                        <img src={assets.history_icon} alt="question icon" />
                        <p className={`${decider ? "block": "hidden"}`}>
                           Activity
                        </p>
                    </div>
                    <div className="bottom-item flex items-start gap-[10px] p-[10px] hover:bg-[#e2e6eb] pr-[40px] rounded-[50px] text-[#282828]  cursor-pointer">
                        <img src={assets.setting_icon} alt="question icon" />
                        <p className={`${decider ? "block": "hidden"}`}>
                          Settings
                        </p>
                    </div>

                </div>
            </div>

        </section>
        </>
    )

}
export default Sidebar