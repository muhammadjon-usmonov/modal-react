import React from "react";
import './modal.css';

function Modal (){

    const modalRef = React.useRef(null);
    const buttonRef = React.useRef(null);
    const bodyRef = React.useRef(null);


    return(
        <main ref={bodyRef}>
            <div ref={modalRef} className="modal__box">
               <div>
                    <p className="modal__text">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat dignissimos impedit temporibus nemo at distinctio architecto expedita! Earum, ratione quod.    
                    </p>

                    <button className="modal__button">
                        Buyurtma berish
                    </button>
               </div>
                <button className="button" onClick={()=>{
                    modalRef.current.style.display = "none";
                    buttonRef.current.style.display = "block";
                    bodyRef.current.classList.remove("main");


                }}>&times;</button>
            </div>

            <button className="button-click" ref={buttonRef} onClick={()=>{
                modalRef.current.style.display = "block"; 
                buttonRef.current.style.display = "none";
                bodyRef.current.classList.add("main");
            }}>
                Buyurtma
            </button>


        </main>
    )
}

export default Modal;