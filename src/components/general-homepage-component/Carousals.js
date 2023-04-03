import Carousel from 'react-bootstrap/Carousel';



function Carousals() {
  return (
    <Carousel className= "slider-1">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src= '/images/c1.jpg'
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>India Tour Packages</h3>
          <p>The ancient spark of the spiritual land, with ethnic evolutionary life, completely different from anywhere on the globe, is the land where your soul awaits to transcend!</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src= '/images/c2.jpg'
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>One Week One Place Tour Packages</h3>
          <p>Don’t count the weeks. Instead, make the whole week count with our fabulous vacations!</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src='/images/c1.jpg'
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Road Trips Packages</h3>
          <p>
          There is nothing more exciting than hitting the road towards an unexplored destination. Count on us to turn your road trip tour into memorable affairs.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Carousals;