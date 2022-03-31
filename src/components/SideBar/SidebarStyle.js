import styled from "styled-components";

export const SideBarContainer = styled.div`
position: relative;
width: 250px;
  background-color: white;
  height: 100vh;

  .LogoSideSplit{
    display: flex;
    // justify-content: space-between;
    align-items: center;
    padding: 0 1rem;
  }

  .descriptionLogo{
      padding: 1em;

      h6{
          color: grey;
      }

  }
`

export const SideBarListings = styled.div`

ul{
    display: block;
    // padding: 0 1em;
}

ul .side {
    display: flex;
  gap: 1em;
    align-items: center;
    padding: 0 1em;
}

ul .side:hover {
    background-color: blue;
    // padding: .5em;
    border-radius: 2px;
    color: white;
}

li{
    margin: 1em 0;
    transition: all 0.2s ease-in-out;
    cursor: pointer;
    font-weight: 500;

}

`

export const FooterProfileDetails = styled.div`
position: fixed;
bottom: 0;
left: 0;
padding: 1.5em 1em;

.help{
     display: flex;
    gap: 1em;
    align-items: center;
    padding: 1em 0;
      color: grey;
 
h4{
    color: grey;
}

}

.FooterLogo{
    display: flex;
     align-items: center;
        gap: 2em;
}
`

export default SideBarContainer