import EcomPayingVsNonPayingChart from 'components/charts/e-charts/EcomPayingVsNonPayingChart';
import React from 'react';
import { Card } from 'react-bootstrap';

const EcomPayingVsNonPayingCard = () => {
  return (
    <Card className="h-100">
      <Card.Body className="d-flex flex-column">
        <div className="d-flex justify-content-between">
          <div>
            <h5 className="mb-2">Конверсия в покупку</h5>
            <h6 className="text-body-tertiary">за последние 7 дней</h6>
          </div>
        </div>
        <div className="d-flex justify-content-center pt-3 flex-1">
          <EcomPayingVsNonPayingChart />
        </div>
        <div className="mt-3">
          <div className="d-flex align-items-center mb-2">
            <div className="bullet-item bg-primary me-2"></div>
            <h6 className="text-body fw-semibold flex-1 mb-0">
              Платежеспособный клиент
            </h6>
            <h6 className="text-body fw-semibold mb-0">30%</h6>
          </div>
          <div className="d-flex align-items-center">
            <div className="bullet-item bg-primary-subtle me-2"></div>
            <h6 className="text-body fw-semibold flex-1 mb-0">
              Неплатежеспособный клиент
            </h6>
            <h6 className="text-body fw-semibold mb-0">70%</h6>
          </div>
        </div>
      </Card.Body>
    </Card>
  );
};

export default EcomPayingVsNonPayingCard;
