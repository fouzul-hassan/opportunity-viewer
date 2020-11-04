import React, { ReactElement } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";

import { useResponsiveContext } from "../../App";

import Search from "../Search/Search";

const responsiveResizes = (isLg: boolean) => {
  const navWidth: string = isLg ? "w-100" : "w-85";
  const searchWidth: string = isLg ? "w-65" : "w-40";
  const brandWidth: string = isLg ? "w-10 mr-0" : "w-25";
  const collapseWidth: string = isLg ? "mw-10" : "mw-25";
  return { navWidth, searchWidth, brandWidth, collapseWidth };
};

export default function NavBar(): ReactElement {
  const { isLg } = useResponsiveContext();
  const {
    navWidth,
    brandWidth,
    collapseWidth,
    searchWidth,
  } = responsiveResizes(isLg);

  return (
    <Navbar bg="white" expand="lg" fixed="top" className="shadow-sm">
      <Container className={navWidth} fluid>
        <Navbar.Brand
          href="#home"
          className={`${brandWidth} d-flex align-items-center`}>
          {!isLg && (
            <img
              alt="AIESEC logo"
              src="https://cdn-expa.aiesec.org/assets/images/aiesec_logo_black.svg"
              height="26px"></img>
          )}
          {isLg && (
            <img
              alt="AIESEC A"
              src="https://cdn-expa.aiesec.org/assets/images/favicon-white.png"
              height="46px"></img>
          )}
        </Navbar.Brand>
        {/* <Form inline className={`${searchWidth} justify-content-center`}>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          {/* <Button variant="outline-success">Search</Button> 
        </Form> */}
        <Search searchWidth={searchWidth}></Search>
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          className="border-0 p-2 navbar__toggle white-button-click"
        />
        <Navbar.Collapse id={`basic-navbar-nav`} className={`${collapseWidth}`}>
          <Nav className="ml-auto">
            <Nav.Link href="#home">Help</Nav.Link>
            <Nav.Link href="#link">Log In</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

//   return (
//     <div>
//       <Navbar bg="white" expand="sm" variant="light" fixed="top">
//         {/* <Container fluid className="justify-content-center"> */}
//         {/* <Col lg={10} sm={10} xs={12} md={10}> */}
//         {/* <Row> */}
//         {/* <Col className="d-flex align-items-center justify-content-start"> */}
//         <Navbar.Brand href="#home">
//           {!isMobile && (
//             <img
//               src="https://cdn-expa.aiesec.org/assets/images/aiesec_logo_black.svg"
//               height="70%"></img>
//           )}
//           {isMobile && (
//             <img
//               src="https://cdn-expa.aiesec.org/assets/images/favicon-white.png"
//               height="40px"></img>
//           )}
//         </Navbar.Brand>

//         {/* </Col> */}
//         {/* <Col className="d-flex align-items-center justify-content-center"> */}
//         <Form inline>
//           <FormControl type="text" placeholder="Search" className="mr-sm-2" />
//           {/* <Button variant="outline-success">Search</Button> */}
//         </Form>
//         {/* </Col> */}
//         {/* <Col className="d-flex align-items-center justify-content-end"> */}
//         <Nav id="basic-navbar-nav">
//           <Navbar.Toggle aria-controls="basic-navbar-nav" />
//           <Navbar.Collapse
//             style={{ width: "fit-content" }}
//             id="basic-navbar-nav"
//             className="justify-content-end">
//             <Nav.Link href="#link">Help</Nav.Link>
//             <Nav.Link href="#link">Log In</Nav.Link>
//           </Navbar.Collapse>
//         </Nav>
//         {/* </Col> */}
//         {/* </Row> */}
//         {/* </Col> */}
//         {/* </Container> */}
//       </Navbar>
//     </div>
//   );
