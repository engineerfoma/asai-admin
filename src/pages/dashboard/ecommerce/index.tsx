import { Col, Row } from 'react-bootstrap';
import EcomTotalOrdersCard from 'components/cards/EcomTotalOrdersCard';
import EcomNewCustomersCard from 'components/cards/EcomNewCustomersCard';
import EcomTopCouponsCard from 'components/cards/EcomTopCouponsCard';
import EcomPayingVsNonPayingCard from 'components/cards/EcomPayingVsNonPayingCard';
import EcomStats from 'components/stats/EcomStats';
import EcomTotalSells from 'components/modules/e-commerce/dashboard/EcomTotalSells';

const Ecommerce = () => {
  return (
    <>
      <div className="pb-5">
        <Row className="g-4">
          <Col xs={12} xxl={6}>
            <div className="mb-8">
              <h2 className="mb-2">Панель управления электронной коммерцией</h2>
              <h5 className="text-body-tertiary fw-semibold">
                На этой странице размещена детальная информация о вашем бизнесе
              </h5>
            </div>
            <EcomStats />
            <hr className="bg-body-secondary mb-6 mt-4" />
            <EcomTotalSells />
          </Col>
          <Col xs={12} xxl={6}>
            <Row className="g-3">
              <Col xs={12} md={6}>
                <EcomTotalOrdersCard />
              </Col>
              <Col xs={12} md={6}>
                <EcomNewCustomersCard />
              </Col>
              <Col xs={12} md={6}>
                <EcomTopCouponsCard />
              </Col>
              <Col xs={12} md={6}>
                <EcomPayingVsNonPayingCard />
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default Ecommerce;
