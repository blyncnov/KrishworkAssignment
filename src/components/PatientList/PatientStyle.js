import styled from "styled-components";

export const PatientListContainer = styled.div`
 


.patientTag{
    padding: 1em 0;

     h4{
    color: blue;
    font-weight: 500;
}

    span {
    color: grey;
}
}

.amenities {
    display: flex;
    gap: 1em;
justify-content: space-between;
align-items: center;

input{
    border: .6px solid #ccc;
    background-color: transparent;
    padding: 0.5em;
    border-radius: .6em;
}
}

`

export const PatientProfileContainer = styled.div`
position: relative;
width: 100%;
padding: 1em;
display: flex;
justify-content: space-between;
align-items: center;

.profile{
    display: flex;
   gap: 1em;
    align-items: center;
}
`

export const ProfileContainer = styled.div`
position: relative;
width: 100%;
padding: 1em 0;
`

export const Circle = styled.div`
height: 100px;
width: 100px;
border-radius: 50%;
background-color: blue;
margin: .5em 0;
`

export const Section = styled.div`
display: grid;
grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
gap: 1em;

`

export const GridContainer = styled.div`
background-color: transparent;
width: 100%;
padding: 1em 0;
`

export const Divider = styled.div`
background-color: white;
width: 100%;
padding: .5em ;
border-radius: .2em;

.past , .Upcoming{

h4{
    font-weight: 500;
}

}



gap: 1em;

h3{
    margin: .5em 0;
}

h5{
    color: grey;
}

.data-set{
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 3em;
    text-align: center;
}

button{
    width: 100%;
    border: 1px solid #ccc;
    background-color: transparent;
    padding: .5em 1em;
    border-radius: 4px;
    cursor: pointer;
}

.alldata{
    display: grid;
grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));

    .datas {
    padding: 1em;
    
h3{
    font-weight: 500;
}

}


}


`



export default PatientListContainer