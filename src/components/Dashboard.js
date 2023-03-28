import { width } from '@mui/system';
import { MDBBtn, MDBCol, MDBRow, MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardImage, MDBContainer } from 'mdb-react-ui-kit';
import React from 'react'

const imgStyle = {
    height: '220px',
    width: 'auto'
}

const cardStyle = {
    height: '',
    width: '',
    display: 'flex',
    justiyContent: 'space-between',
    flexDirection: 'column'
}

const bike1 = {
    img: "https://images.immediate.co.uk/production/volatile/sites/21/2019/04/ribble-endurance-al-disc-07-782e498.jpg?quality=90&resize=620,413",
    modelo: "Ribble Endurance AL Disc",
    tipo: "Bicicleta citadina",
    rating: "4.4",
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut quam laborum doloribus dicta nulla nobis hic cupiditate consectetur culpa repellendus explicabo reprehenderit, sapiente iure? Facilis voluptatem fugiat accusantium veritatis quos?"
};

const bike2 = {
    img: "https://u7q2x7c9.stackpathcdn.com/photos/22/86/350096_28005_XXL.jpg",
    modelo: "Ibis Ripmo V2 XT",
    tipo: "Bicicleta de montaña",
    rating: "4.7",
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut quam laborum doloribus dicta nulla nobis hic cupiditate consectetur culpa repellendus explicabo reprehenderit, sapiente iure? Facilis voluptatem fugiat accusantium veritatis quos?"
}

const bike3 = {
    img: "https://u7q2x7c9.stackpathcdn.com/photos/18/48/306304_5781_XXL.jpg",
    modelo: "Yeti SB130 TURQ X01",
    tipo: "Bicicleta de montaña",
    rating: "4.2",
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut quam laborum doloribus dicta nulla nobis hic cupiditate consectetur culpa repellendus explicabo reprehenderit, sapiente iure? Facilis voluptatem fugiat accusantium veritatis quos?"
}

const bike4 = {
    img: "https://cdn.shopify.com/s/files/1/1353/4159/products/C1_SIDE_BRG_BLK_2880x1600_23307d11-d30c-4dc2-9853-bf06d0e2ed8d_1400x.png?v=1560417657",
    modelo: "Brompton C Line Urban",
    tipo: "Bicicleta citadina",
    rating: "4.1",
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut quam laborum doloribus dicta nulla nobis hic cupiditate consectetur culpa repellendus explicabo reprehenderit, sapiente iure? Facilis voluptatem fugiat accusantium veritatis quos?"
}

const bikes = [bike1, bike2, bike3,bike4];

const BikeCard = ({ bike }) => {
    return (
        <MDBCol className='mb-4' size='6'>
            <MDBCard style={cardStyle}>
                <div className='text-center' style={{height: '250px'}}>
                    <MDBCardImage src={bike.img} position='top'
                        style={imgStyle}
                    />
                </div>
                <MDBCardBody>
                    <MDBCardTitle className='fw-bold'>{bike.modelo}</MDBCardTitle>
                    <MDBCardText>
                        <MDBRow className='fw-bold'>
                            <MDBCol>
                                <p style={{ color: '#3b71ca' }}>{bike.tipo}</p>
                            </MDBCol>
                            <MDBCol className='text-end'>
                                <p style={{ color: '#fdc72a' }}>Rating: {bike.rating} ★</p>
                            </MDBCol>
                        </MDBRow>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut quam laborum doloribus dicta nulla nobis hic cupiditate consectetur culpa repellendus explicabo reprehenderit, sapiente iure? Facilis voluptatem fugiat accusantium veritatis quos?</p>
                    </MDBCardText>
                    <MDBRow>
                        <MDBBtn position='bottom'>Rentar</MDBBtn>
                    </MDBRow>
                </MDBCardBody>
            </MDBCard>
        </MDBCol>
    );
};

export const Dashboard = () => {
    return (
        <MDBContainer className='mt-4'>
            <MDBRow>
                <MDBCol>
                    <div className="mb-4">
                        <h2>Hola Ulises</h2>
                        <h5>Rentaste una bicicleta el 24 de marzo de 2023</h5>
                        <p>Te quedan <span style={{ color: '#3b71ca', fontWeight:'bold' }}>15:24 minutos</span> de uso.</p>
                        <p>Estación más cercana <span style={{ color: '#3b71ca', fontWeight:'bold' }}>Plaza Dila</span></p>
                        <MDBBtn>Entregar</MDBBtn>
                    </div>
                    <MDBRow>
                        {bikes.map((bike, index) => (
                            <BikeCard key={index} bike={bike} />
                        ))}
                    </MDBRow>
                </MDBCol>
            </MDBRow>

        </MDBContainer>
    )
}

export default Dashboard;
