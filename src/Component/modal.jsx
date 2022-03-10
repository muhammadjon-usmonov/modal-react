import React from "react";
import './modal.css';

function Modal (){

    const modalRef = React.useRef(null);

    return(
        <main >
            <div ref={modalRef} className="modal__box">
               <div className="modal__inner">
                    <p className="modal__text">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat dignissimos impedit temporibus nemo at distinctio architecto expedita! Earum, ratione quod.    
                    </p>

                    <button className="modal__button">
                        Buyurtma berish
                    </button>
                <button className="button" onClick={()=>{
                    modalRef.current.classList.remove('modal__box--open')
                    

                }}>&times;</button>
               </div>
            </div>

            <button className="button-click" onClick={()=>{
                modalRef.current.classList.add('modal__box--open')

            }}>
                Buyurtma
            </button>


        </main>
    )
}

export default Modal;