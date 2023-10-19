import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';



// We use JSX curly braces to evaluate the style object on the JSX tag
function Section(data) {
  console.log(data.projectList[0]);
  return (
    <Row xs={1} md={3} className="g-4">
      {Array.from({ length: 6 }).map((_, idx) => (
        <Col key={idx}>
          <Card className="mb-3 ">
            <Card.Img src={data.projectList[idx].foto} alt={data.title} />
              <Card.ImgOverlay>
                <Card.Title>{data.title}</Card.Title>
                  <Card.Text>
                    This is a wider card with supporting text below as a natural lead-in
                    to additional content. This content is a little bit longer.
                  </Card.Text>
              <Card.Text>Last updated 3 mins ago</Card.Text>
            </Card.ImgOverlay>
        </Card>
        </Col>
      ))}
    </Row>
  );
}

export default Section;
