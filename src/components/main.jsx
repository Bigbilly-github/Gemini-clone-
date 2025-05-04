import { assets } from "../assets/assets"




function Main (){

    return(
        <>
  
            <div className="flex-1 min-h-[100vh] pb-[15vh] relative">
                <div className="flex items-center justify-between text-[22px] p-[20px] text-[#585858]">
                    <p>
                        Gemini
                    </p>
                    <img src={assets.user_icon} alt="user icon"  className="w-[40px] rounded-[50%]"/>
                </div>
                <div className="max-w-[900px] m-auto">
                    <div className="my-[50px] mx-0 text-[56px] text-[#c4c7c5] font-medium  p-[20px]">
                        <p>
                            <span  style={{background: '-webkit-linear-gradient(16deg, #4b90ff, #ff5546)',WebkitBackgroundClip: 'text',WebkitTextFillColor: 'transparent', }}
                            
                             >
                                Hello Abiola
                            </span>
                        </p>
                        <p>
                            How can i help you today?
                        </p>
                    </div>
                    <div className="grid gap-[15px] p-[20px] grid-cols-[repeat(auto-fill,_minmax(180px,_1fr))]">
                        <div className=" hover:bg-[#dfe4ed]    h-[200px] p-[15px] bg-[#f0f4f9] rounded-[10px] relative cursor-pointer">
                            <p className="text-[#585858] text-[17px] ">
                                Suggest beautiful places to go on holiday
                            </p>
                            <img src={assets.compass_icon} alt="compass icon" className="w-[35px] p-[5px] absolute bg-white rounded-[20px] bottom-[10px] right-[10px]  " />
                        </div>
                        <div className="hover:bg-[#dfe4ed]     h-[200px] p-[15px] bg-[#f0f4f9] rounded-[10px] relative cursor-pointer">
                        <p className="text-[#585858] text-[17px] ">
                                Briefly summarize this concept: urban planning
                            </p>
                            <img src={assets.bulb_icon} alt="compass icon" className="w-[35px] p-[5px] absolute bg-white rounded-[20px] bottom-[10px] right-[10px]  "  />
                        </div>
                        <div className="hover:bg-[#dfe4ed]     h-[200px] p-[15px] bg-[#f0f4f9] rounded-[10px] relative cursor-pointer">
                        <p className="text-[#585858] text-[17px] ">
                               Brainstorm team bonding activities for work retreat
                            </p>
                            <img src={assets.message_icon} alt="compass icon"  className="w-[35px] p-[5px] absolute bg-white rounded-[20px] bottom-[10px] right-[10px]  " />
                        </div>
                        <div className="hover:bg-[#dfe4ed]     h-[200px] p-[15px] bg-[#f0f4f9] rounded-[10px] relative cursor-pointer">
                        <p className="text-[#585858] text-[17px] ">
                                Improve the readability of this code
                            </p>
                            <img src={assets.code_icon} alt="compass icon"  className="w-[35px] p-[5px] absolute bg-white rounded-[20px] bottom-[10px] right-[10px]  " />
                        </div>
                    </div>
                    <div className="absolute bottom-0 w-[100%] max-w-[900px] py-0 px-[20px] m-auto">
                        <div className="flex items-center justify-between gap-[20px] bg-[#f0f4f9] py-[10px] px-[20px]  rounded-[50px] ">
                            <input type="text" placeholder="Enter a prompt here" className="flex-1 bg-transparent border-0 outline-0 p-[8px] text-[18px] " />
                            <div className="flex items-center gap-[15px]">
                                <img src={assets.gallery_icon} alt="gallery icon" className="w-[24px] cursor-pointer" />
                                <img src={assets.mic_icon} alt="microphone icon" className="w-[24px] cursor-pointer" />
                                <img src={assets.send_icon} alt="send icon"  className="w-[24px] cursor-pointer"/>
                            </div>
                        </div>
                        <p className="text-[13px] my-[15px] mx-auto text-center font-light">
                            Gemini may display inaccurate imfo, including about poeple, so double-check its responses. Your privacy and Gemini Apps 
                        </p>
                    </div>
                </div>
            </div>

     
        </>
    )

}
export default Main