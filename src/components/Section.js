// import React from 'react'
// import styled from "styled-components"

// import { motion } from "framer-motion";


// function Section({title,description,leftBtnText,rightBtnText,backgroundImg}){
//   return (
//     <Wrap bgImage={backgroundImg}>
     
//       <motion.div 
//   initial={{ opacity: 0, y: 50 }} 
//   animate={{ opacity: 1, y: 0 }} 
//   transition={{ duration: 0.8 }}
// >
//   <ItemText>
//     <h1>{title}</h1>
//     <p>{description}</p>
//   </ItemText>
// </motion.div>

//       <Buttons>
//       <motion.div 
//   initial={{ opacity: 0, y: 50 }} 
//   animate={{ opacity: 1, y: 0 }} 
//   transition={{ duration: 0.8 }}
// >
//       <ButtonGroup>
//         <LeftButton>
//           {leftBtnText}
//         </LeftButton>
//         { rightBtnText && 
//            <RightButton>
//            {rightBtnText}
//          </RightButton>
//         }
     
//       </ButtonGroup>
//       </motion.div>
//       <DownArrow src="/images/down-arrow.svg"/>  
//       </Buttons>
//     </Wrap>
//   )
// }

// export default Section
// const Wrap =styled.div`
// width:100vw;
// height:100vh;
// background-size:cover;
// background-position:center;
// background-repeat:no-repeat;
// // background-image:url('/images/model-s.jpg');
// display:flex;
// flex-direction:column;
// justify-content:space-between;
// align-items:center;
// background-image:${props=>`url("/images/${props.bgImage}")`}
// `
// const ItemText=styled.div`
// padding-top:15vh;
// text-align:center;
// z-index:-1;
// `
// const ButtonGroup=styled.div`
// display:flex;
// margin-bottom:30px;
// @media (max-width:768px){
// flex-direction:column;
// }
// `
// const LeftButton=styled.div`
// background-color:rgba(23,26,32,0.8);
// height:40px;
// width:256px;
// color:white;
// display:flex;
// justify-content:center;
// align-items:center;
// border-radius:100px;
// opacity:0.85;
// text-transform:uppercase;
// font-size: 12px;
// cursor:pointer;
// margin:8px;

// `
// const RightButton=styled(LeftButton)`
// background:white;
// opacity:0.65;
// color:black;
// `
// const DownArrow=styled.img`
// margin-top:20px;
// height:40px;
// overflow-x:hidden;
// animation:animateDown infinite 1.5s;
// `
// const Buttons=styled.div`

// `






// import React from "react";
// import styled, { keyframes } from "styled-components";
// import { motion } from "framer-motion";

// function Section({ title, description, leftBtnText, rightBtnText, backgroundImg }) {
//   return (
//     <Wrap bgImage={backgroundImg}>
//       <motion.div 
//         initial={{ opacity: 0, y: 50 }} 
//         animate={{ opacity: 1, y: 0 }} 
//         transition={{ duration: 0.8 }}
//       >
//         <ItemText>
//           <h1>{title}</h1>
//           <p>{description}</p>
//         </ItemText>
//       </motion.div>

//       <Buttons>
//         <motion.div 
//           initial={{ opacity: 0, y: 50 }} 
//           animate={{ opacity: 1, y: 0 }} 
//           transition={{ duration: 0.8 }}
//         >
//           <ButtonGroup>
//             <LeftButton>{leftBtnText}</LeftButton>
//             {rightBtnText && <RightButton>{rightBtnText}</RightButton>}
//           </ButtonGroup>
//         </motion.div>
//         <DownArrow src="/images/down-arrow.svg" />
//       </Buttons>
//     </Wrap>
//   );
// }

// export default Section;

// // Styled Components
// const Wrap = styled.div`
//   width: 100vw;
//   height: 100vh;
//   background-size: cover;
//   background-position: center;
//   background-repeat: no-repeat;
//   display: flex;
//   flex-direction: column;
//   justify-content: space-between;
//   align-items: center;
//   background-image: ${(props) => `url("/images/${props.bgImage}")`};
// `;

// const ItemText = styled.div`
//   padding-top: 15vh;
//   text-align: center;
// `;

// const ButtonGroup = styled.div`
//   display: flex;
//   margin-bottom: 30px;
  
//   @media (max-width: 768px) {
//     flex-direction: column;
//   }
// `;

// const LeftButton = styled.div`
//   background-color: rgba(23, 26, 32, 0.8);
//   height: 40px;
//   width: 256px;
//   color: white;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   border-radius: 100px;
//   opacity: 0.85;
//   text-transform: uppercase;
//   font-size: 12px;
//   cursor: pointer;
//   margin: 8px;
// `;

// const RightButton = styled(LeftButton)`
//   background: white;
//   opacity: 0.65;
//   color: black;
// `;

// // Add the missing animation
// const animateDown = keyframes`
//   0% { transform: translateY(0); }
//   50% { transform: translateY(5px); }
//   100% { transform: translateY(0); }
// `;

// const DownArrow = styled.img`
//   margin-top: 20px;
//   height: 40px;
//   overflow-x: hidden;
//   animation: ${animateDown} infinite 1.5s;
// `;

// const Buttons = styled.div``;





import React from "react";
import styled, { keyframes } from "styled-components";
import { motion } from "framer-motion";

function Section({ title, description, leftBtnText, rightBtnText, backgroundImg }) {
  return (
    <Wrap bgImage={backgroundImg}>
      <motion.div 
        initial={{ opacity: 0, y: 50 }} 
        whileInView={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.8 }}
        viewport={{ once: false, amount: 0.2 }}
      >
        <ItemText>
          <h1>{title}</h1>
          <p>{description}</p>
        </ItemText>
      </motion.div>

      <Buttons>
        <motion.div 
          initial={{ opacity: 0, y: 50 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.8 }}
          viewport={{ once: false, amount: 0.2 }}
        >
          <ButtonGroup>
            <LeftButton>{leftBtnText}</LeftButton>
            {rightBtnText && <RightButton>{rightBtnText}</RightButton>}
          </ButtonGroup>
        </motion.div>
        <DownArrow src="/images/down-arrow.svg" />
      </Buttons>
    </Wrap>
  );
}

export default Section;

// Styled Components
const Wrap = styled.div`
  width: 100vw;
  height: 100vh;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-image: ${(props) => `url("/images/${props.bgImage}")`};
`;

const ItemText = styled.div`
  padding-top: 15vh;
  text-align: center;
`;

const ButtonGroup = styled.div`
  display: flex;
  margin-bottom: 30px;
  
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const LeftButton = styled.div`
  background-color: rgba(23, 26, 32, 0.8);
  height: 40px;
  width: 256px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100px;
  opacity: 0.85;
  text-transform: uppercase;
  font-size: 12px;
  cursor: pointer;
  margin: 8px;
`;

const RightButton = styled(LeftButton)`
  background: white;
  opacity: 0.65;
  color: black;
`;

// Add missing animation
const animateDown = keyframes`
  0% { transform: translateY(0); }
  50% { transform: translateY(5px); }
  100% { transform: translateY(0); }
`;

const DownArrow = styled.img`
  margin-top: 20px;
  height: 40px;
  overflow-x: hidden;
  animation: ${animateDown} infinite 1.5s;
`;

const Buttons = styled.div``;

