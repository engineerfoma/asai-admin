import EcomTopCouponsChart from 'components/charts/e-charts/EcomTopCouponsChart';
import { Card } from 'react-bootstrap';

const EcomTopCouponsCard = () => {
  return (
    <Card className="h-100">
      <Card.Body>
        <div className="d-flex justify-content-between">
          <div>
            <h5 className="mb-2">Процент продаж со скидками и средний дисконт </h5>
            <h6 className="text-body-tertiary">За последние 7 дней</h6>
          </div>
        </div>
        <div className="pb-4 pt-3">
          <EcomTopCouponsChart />
        </div>
        <div>
          <div className="d-flex align-items-center mb-2">
            <div className="bullet-item bg-primary me-2"></div>
            <h6 className="text-body fw-semibold flex-1 mb-0">
              Продажи со скидками
            </h6>
            <h6 className="text-body fw-semibold mb-0">72%</h6>
          </div>
          <div className="d-flex align-items-center mb-2">
            <div className="bullet-item bg-primary-lighter me-2"></div>
            <h6 className="text-body fw-semibold flex-1 mb-0">
              средний дисконт
            </h6>
            <h6 className="text-body fw-semibold mb-0">28%</h6>
          </div>
        </div>
      </Card.Body>
    </Card>
  );
};

export default EcomTopCouponsCard;
