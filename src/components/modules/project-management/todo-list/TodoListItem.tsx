import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Badge from 'components/base/Badge';
import Button from 'components/base/Button';
import React, { ChangeEvent, useCallback, useState } from 'react';
import { Col, Form, Row } from 'react-bootstrap';
import { ToDoItem } from 'data/project-management/todoListData';
import classNames from 'classnames';
import {
  faEdit,
  faPaperclip,
  faTasks,
  faTrash
} from '@fortawesome/free-solid-svg-icons';

type Breakpoints = 'md' | 'lg' | 'xl' | 'xxl';

interface TodoListItemInterface {
  todo: ToDoItem;
  className?: string;
  labelClassName?: string;
  halfLayoutBreakpoints?: Breakpoints[];
  fullLayoutBreakpoints?: Breakpoints[];
  onClick?: (item: ToDoItem) => void;
}
type FullLayoutBreakpoints = {
  [key in Breakpoints]?: 'auto';
};
type HalfLayoutBreakpoints = {
  [key in Breakpoints]?: 12;
};

const TodoListItem = ({
  todo,
  className,
  labelClassName,
  halfLayoutBreakpoints = [],
  fullLayoutBreakpoints = [],
  onClick
}: TodoListItemInterface) => {
  const [selected, setSelected] = useState(todo.completed);

  const handleSelectionChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSelected(e.target.checked);
  };

  const handleClick = (item: ToDoItem) => {
    if (onClick) {
      onClick(item);
    } else {
      setSelected(!selected);
    }
  };

  const getBreakpointClasses = useCallback(
    (className: string, values: (number | string)[]) =>
      [
        ...halfLayoutBreakpoints.map(
          breakpoint => `${className}-${breakpoint}-${values[0]}`
        ),
        ...fullLayoutBreakpoints.map(
          breakpoint => `${className}-${breakpoint}-${values[1]}`
        )
      ].join(' '),
    [halfLayoutBreakpoints, fullLayoutBreakpoints]
  );

  return (
    <>
      <div
        className={classNames(
          className,
          'd-flex align-items-center hover-actions-trigger border-bottom border-translucent gap-2 todolist-item'
        )}
      >
        <Form.Check.Input
          type="checkbox"
          checked={selected}
          className={classNames('flex-shrink-0 my-0 align-self-start')}
          onChange={handleSelectionChange}
        />
        <Row className="justify-content-between align-items-center btn-reveal-trigger border-translucent gx-0 flex-1 gy-1">
          <Col
            xs={12}
            {...fullLayoutBreakpoints?.reduce(
              (acc: FullLayoutBreakpoints, val: Breakpoints) => {
                acc[val] = 'auto';
                return acc;
              },
              {}
            )}
            {...halfLayoutBreakpoints?.reduce(
              (acc: HalfLayoutBreakpoints, val: Breakpoints) => {
                acc[val] = 12;
                return acc;
              },
              {}
            )}
          >
            <div className="d-flex align-items-center lh-1 gap-2">
              <h5
                className={classNames(
                  labelClassName,
                  'mb-0 line-clamp-1 fw-semibold text-body-tertiary cursor-pointer',
                  {
                    'text-decoration-line-through text-body-quaternary':
                      selected
                  }
                )}
                onClick={() => handleClick(todo)}
              >
                {todo.task}
              </h5>
              {todo.badge && (
                <Badge
                  variant="phoenix"
                  bg={todo.badge.bg}
                  className="fs-10 ms-auto"
                >
                  {todo.badge.label}
                </Badge>
              )}
            </div>
          </Col>
          <Col
            xs={12}
            {...fullLayoutBreakpoints?.reduce(
              (acc: FullLayoutBreakpoints, val: Breakpoints) => {
                acc[val] = 'auto';
                return acc;
              },
              {}
            )}
            {...halfLayoutBreakpoints?.reduce(
              (acc: HalfLayoutBreakpoints, val: Breakpoints) => {
                acc[val] = 12;
                return acc;
              },
              {}
            )}
          >
            <div className="d-flex lh-1 align-items-center">
              {todo.attachment && (
                <Button className="p-0 text-body-tertiary fs-10 me-2">
                  <FontAwesomeIcon icon={faPaperclip} className="me-1" />
                  {todo.attachment}
                </Button>
              )}
              {todo.listitems && (
                <Button className="p-0 text-warning fs-10 me-2">
                  <FontAwesomeIcon icon={faTasks} className="me-1" />
                  {todo.listitems}
                </Button>
              )}
              <p
                className={classNames(
                  getBreakpointClasses('me', [2, 3]),
                  'text-body-tertiary fs-10 me-2 mb-0'
                )}
              >
                {todo.date}
              </p>
              <div
                className={classNames(
                  getBreakpointClasses('hover', ['show', 'hide'])
                )}
              >
                <p
                  className={classNames(
                    getBreakpointClasses('ps', [0, 3]),
                    'text-body-tertiary fs-10 ps-lg-3 border-start-lg fw-bold mb-md-0 mb-0'
                  )}
                >
                  {todo.time}
                </p>
              </div>
            </div>
          </Col>
        </Row>
        <div
          className={classNames(
            getBreakpointClasses('d', ['none', 'block']),
            'd-none end-0 position-absolute'
          )}
          style={{ top: '23%' }}
        >
          <div className="hover-actions end-0">
            <Button variant="phoenix-secondary" className="btn-icon fs-10 me-1">
              <FontAwesomeIcon icon={faEdit} />
            </Button>
            <Button variant="phoenix-secondary" className="btn-icon fs-10">
              <FontAwesomeIcon icon={faTrash} className="text-danger" />
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default TodoListItem;
