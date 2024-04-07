import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { faHourglassHalf } from '@fortawesome/free-regular-svg-icons';
import {
  Icon,
  UilChartPie,
  UilCube,
  UilDocumentLayoutRight,
  UilFilesLandscapesAlt,
  UilPuzzlePiece
} from '@iconscout/react-unicons';

export interface Route {
  name: string;
  icon?: IconProp | string | string[];
  iconSet?: 'font-awesome' | 'feather' | 'unicons';
  pages?: Route[];
  path?: string;
  pathName?: string;
  flat?: boolean;
  topNavIcon?: string;
  dropdownInside?: boolean;
  active?: boolean;
  new?: boolean;
  hasNew?: boolean;
}

export interface RouteItems {
  label: string;
  horizontalNavLabel?: string;
  icon: Icon;
  labelDisabled?: boolean;
  pages: Route[];
  megaMenu?: boolean;
  active?: boolean;
}

export const routes: RouteItems[] = [
  {
    label: 'dashboard',
    horizontalNavLabel: 'home',
    active: true,
    icon: UilChartPie,
    labelDisabled: true,
    pages: [
      {
        name: 'Сервисы',
        icon: 'pie-chart',
        active: true,
        flat: true,
        pages: [
          {
            name: 'Мониторинг',
            path: '/',
            pathName: 'default-dashboard',
            topNavIcon: 'shopping-cart',
            active: true
          },
          {
            name: 'AiHouse',
            path: '/services/aihouse',
            pathName: 'aihouse',
            topNavIcon: 'clipboard',
            active: true
          }
          // {
          //   name: 'AiHouse',
          //   path: '/dashboard/project-management',
          //   pathName: 'project-management-dashbaord',
          //   topNavIcon: 'clipboard',
          //   active: true
          // },
          // {
          //   name: 'CRM',
          //   path: '/dashboard/crm',
          //   pathName: 'crm',
          //   topNavIcon: 'phone',
          //   active: true
          // },
          // {
          //   name: 'social-feed',
          //   path: '/apps/social/feed',
          //   pathName: 'social-feed',
          //   topNavIcon: 'share-2',
          //   active: true
          // }
        ]
      }
    ]
  },
  {
    label: 'account',
    horizontalNavLabel: 'account',
    active: true,
    icon: UilChartPie,
    labelDisabled: true,
    pages: [
      {
        name: 'Аккаунт',
        icon: 'user',
        active: true,
        flat: true,
        pages: [
          {
            name: 'Пользователи',
            path: '/users',
            pathName: 'users',
            topNavIcon: 'feather-users',
            active: true
          }
        ]
      }
    ]
  },
  {
    label: 'e-commerce',
    horizontalNavLabel: 'e-commerce',
    active: true,
    icon: UilCube,
    labelDisabled: true,
    pages: [
      {
        name: 'Подписки и тарифы',
        icon: 'shopping-cart',
        active: true,
        flat: true,
        pages: [
          {
            name: 'Подписки',
            path: '/subscriptions',
            pathName: 'subscriptions',
            topNavIcon: 'feather-users',

            active: true
          },
          {
            name: 'Тарифы',
            path: '/tariffs',
            pathName: 'tariffs',
            topNavIcon: 'feather-users',
            active: true
          }
        ]
      }
    ]
  },
  {
    label: 'modules',
    active: true,
    icon: UilPuzzlePiece,
    megaMenu: true, // works for navbar top
    pages: [
      {
        name: 'forms',
        icon: 'file-text',
        active: true,
        hasNew: true,
        pages: [
          {
            name: 'basic',
            active: true,
            pages: [
              {
                name: 'form-control',
                path: '/modules/forms/form-control',
                pathName: 'form-control',
                active: true
              },
              {
                name: 'input-group',
                path: '/modules/forms/input-group',
                pathName: 'form-input-group',
                active: true
              },
              {
                name: 'select',
                path: '/modules/forms/select',
                pathName: 'form-select',
                active: true
              },
              {
                name: 'checks',
                path: '/modules/forms/checks',
                pathName: 'form-checks',
                active: true
              },
              {
                name: 'range',
                path: '/modules/forms/range',
                pathName: 'form-range',
                active: true
              },
              {
                name: 'floating-labels',
                path: '/modules/forms/floating-labels',
                pathName: 'floating-labels',
                active: true
              },
              {
                name: 'layout',
                path: '/modules/forms/layout',
                pathName: 'form-layout',
                active: true
              }
            ]
          },
          {
            name: 'advance',
            active: true,
            pages: [
              {
                name: 'advance-select',
                path: '/modules/forms/advance-select',
                pathName: 'advance-select',
                active: true
              },
              {
                name: 'date-picker',
                path: '/modules/forms/date-picker',
                pathName: 'date-picker',
                active: true
              },
              {
                name: 'editor',
                path: '/modules/forms/editor',
                pathName: 'editor',
                active: true
              },
              {
                name: 'emoji-button',
                path: '/modules/forms/emoji-button',
                pathName: 'emoji-button',
                active: true
              },
              {
                name: 'file-uploader',
                path: '/modules/forms/file-uploader',
                pathName: 'file-uploader',
                active: true
              },
              {
                name: 'rating',
                path: '/modules/forms/rating',
                pathName: 'rating',
                active: true
              }
            ]
          },
          {
            name: 'validation',
            path: '/modules/forms/validation',
            pathName: 'forms-validation',
            active: true
          },
          {
            name: 'wizard',
            path: '/modules/forms/wizard',
            pathName: 'forms-wizard',
            active: true,
            new: true
          }
        ]
      },

      {
        name: 'icons',
        icon: 'grid',
        active: true,
        pages: [
          {
            name: 'feather',
            path: '/modules/icons/feather',
            pathName: 'icons-feather',
            active: true
          },
          {
            name: 'font awesome',
            path: '/modules/icons/font-awesome',
            pathName: 'icons-font-awesome',
            active: true
          },
          {
            name: 'unicons',
            path: '/modules/icons/unicons',
            pathName: 'icons-unicons',
            active: true
          }
        ]
      },
      {
        name: 'tables',
        icon: 'columns',
        active: true,
        pages: [
          {
            name: 'Basic tables',
            path: '/modules/tables/basic-tables',
            pathName: 'basic-tables',
            active: true
          },
          {
            name: 'Advance tables',
            path: '/modules/tables/advance-tables',
            pathName: 'advance-tables',
            active: true
          }
        ]
      },
      {
        name: 'charts',
        icon: 'bar-chart-2',
        active: true,
        pages: [
          {
            name: 'ECharts',
            path: '/modules/charts/e-charts',
            pathName: 'e-charts',
            active: true
          },
          {
            name: 'gantt-chart',
            path: '/modules/charts/gantt-chart',
            pathName: 'gantt-chart',
            active: true
          }
        ]
      },
      {
        name: 'components',
        icon: 'package',
        active: true,
        hasNew: true,
        pages: [
          {
            name: 'accordion',
            pathName: 'components-accordion',
            path: '/modules/components/accordion',
            active: true
          },
          {
            name: 'avatar',
            pathName: 'components-avatar',
            path: '/modules/components/avatar',
            active: true
          },
          {
            name: 'alerts',
            pathName: 'components-alerts',
            path: '/modules/components/alerts',
            active: true
          },
          {
            name: 'badge',
            pathName: 'components-badge',
            path: '/modules/components/badge',
            active: true
          },
          {
            name: 'breadcrumb',
            pathName: 'components-breadcrumb',
            path: '/modules/components/breadcrumb',
            active: true
          },
          {
            name: 'buttons',
            pathName: 'components-buttons',
            path: '/modules/components/button',
            active: true
          },
          {
            name: 'calendar',
            pathName: 'components-calendar',
            path: '/modules/components/calendar',
            active: true,
            new: true
          },
          {
            name: 'card',
            pathName: 'components-card',
            path: '/modules/components/card',
            active: true
          },
          {
            name: 'carousel',
            active: true,
            pages: [
              {
                name: 'bootstrap',
                path: '/modules/components/carousel/bootstrap',
                pathName: 'components-bs-carousel',
                active: true
              },
              {
                name: 'swiper',
                path: '/modules/components/carousel/swiper',
                pathName: 'swiper-carousel',
                active: true
              }
            ]
          },
          {
            name: 'collapse',
            pathName: 'components-bs-collapse',
            path: '/modules/components/collapse',
            active: true
          },
          {
            name: 'dropdown',
            pathName: 'components-bs-dropdown',
            path: '/modules/components/dropdown',
            active: true
          },
          {
            name: 'list-group',
            pathName: 'components-bs-list-group',
            path: '/modules/components/list-group',
            active: true
          },
          {
            name: 'countup',
            pathName: 'components-countup',
            path: '/modules/components/countup',
            active: true
          },
          {
            name: 'draggable',
            pathName: 'components-draggable',
            path: '/modules/components/draggable',
            active: true,
            new: true
          },
          {
            name: 'modals',
            pathName: 'components-modal',
            path: '/modules/components/modal',
            active: true
          },
          {
            name: 'navs-_and_-Tabs',
            active: true,
            pages: [
              {
                name: 'navs',
                pathName: 'components-navs',
                path: '/modules/components/navs-and-tabs/navs',
                active: true
              },
              {
                name: 'navbar',
                pathName: 'navbar',
                path: '/modules/components/navs-and-tabs/navbar',
                active: true
              },
              {
                name: 'tabs',
                pathName: 'components-tabs',
                path: '/modules/components/navs-and-tabs/tabs',
                active: true
              }
            ]
          },
          {
            name: 'pictures',
            active: true,
            pages: [
              {
                name: 'Lightbox',
                pathName: 'lightbox',
                path: '/modules/components/pictures/lightbox',
                active: true
              }
            ]
          },
          {
            name: 'offcanvas',
            pathName: 'components-offcanvas',
            path: '/modules/components/offcanvas',
            active: true
          },
          {
            name: 'progress-bar',
            pathName: 'basic-progress-bar',
            path: '/modules/components/progress-bar',
            active: true
          },
          {
            name: 'placeholder',
            pathName: 'components-placeholder',
            path: '/modules/components/placeholder',
            active: true
          },
          {
            name: 'pagination',
            path: '/modules/components/pagination',
            pathName: 'components-pagination',
            active: true
          },
          {
            name: 'popovers',
            path: '/modules/components/popovers',
            pathName: 'components-popovers',
            active: true
          },
          {
            name: 'spinners',
            path: '/modules/components/spinners',
            pathName: 'components-spinners',
            active: true
          },
          {
            name: 'toast',
            path: '/modules/components/toast',
            pathName: 'components-toast',
            active: true
          },
          {
            name: 'tooltips',
            path: '/modules/components/tooltips',
            pathName: 'components-bs-tooltips',
            active: true
          }
        ]
      },
      {
        name: 'utilities',
        icon: 'tool',
        active: true,
        pages: [
          {
            name: 'background',
            path: '/modules/utilities/background',
            pathName: 'utilities-background',
            active: true
          },
          {
            name: 'borders',
            path: '/modules/utilities/borders',
            pathName: 'utilities-borders',
            active: true
          },
          {
            name: 'colors',
            path: '/modules/utilities/colors',
            pathName: 'utilities-colors',
            active: true
          },
          {
            name: 'display',
            path: '/modules/utilities/display',
            pathName: 'utilities-display',
            active: true
          },
          {
            name: 'grid',
            path: '/modules/utilities/grid',
            pathName: 'utilities-grid',
            active: true
          },
          {
            name: 'flex',
            path: '/modules/utilities/flex',
            pathName: 'utilities-flex',
            active: true
          },
          {
            name: 'stack',
            path: '/modules/utilities/stack',
            pathName: 'utilities-stack',
            active: true
          },
          {
            name: 'float',
            path: '/modules/utilities/float',
            pathName: 'utilities-float',
            active: true
          },
          {
            name: 'interactions',
            path: '/modules/utilities/interactions',
            pathName: 'utilities-interactions',
            active: true
          },
          {
            name: 'opacity',
            path: '/modules/utilities/opacity',
            pathName: 'utilities-opacity',
            active: true
          },
          {
            name: 'overflow',
            path: '/modules/utilities/overflow',
            pathName: 'utilities-overflow',
            active: true
          },
          {
            name: 'position',
            path: '/modules/utilities/position',
            pathName: 'utilities-position',
            active: true
          },
          {
            name: 'shadows',
            path: '/modules/utilities/shadows',
            pathName: 'utilities-shadows',
            active: true
          },
          {
            name: 'sizing',
            path: '/modules/utilities/sizing',
            pathName: 'utilities-sizing',
            active: true
          },
          {
            name: 'spacing',
            path: '/modules/utilities/spacing',
            pathName: 'utilities-spacing',
            active: true
          },
          {
            name: 'Typography',
            path: '/modules/utilities/typography',
            pathName: 'utilities-typography',
            active: true
          },
          {
            name: 'vertical-align',
            path: '/modules/utilities/vertical-align',
            pathName: 'utilities-vertical-align',
            active: true
          },
          {
            name: 'visibility',
            path: '/modules/utilities/visibility',
            pathName: 'utilities-visibility',
            active: true
          }
        ]
      },
      {
        name: 'widgets',
        icon: 'server',
        path: '/widgets',
        active: true,
        new: true
      },
      {
        name: 'multi-level',
        icon: 'layers',
        active: true,
        pages: [
          {
            name: 'level-two',
            active: true,
            pages: [
              {
                name: 'item-1',
                path: '#!',
                active: true
              },
              {
                name: 'item-2',
                path: '#!',
                active: true
              }
            ]
          },
          {
            name: 'level-three',
            active: true,
            pages: [
              {
                name: 'item-3',
                path: '#!',
                active: true
              },
              {
                name: 'item-4',
                path: '#!',
                active: true,
                pages: [
                  {
                    name: 'item-5',
                    path: '#!',
                    active: true
                  },
                  {
                    name: 'item-6',
                    path: '#!',
                    active: true
                  }
                ]
              }
            ]
          },
          {
            name: 'level-four',
            active: true,
            pages: [
              {
                name: 'item-6',
                path: '#!',
                active: true
              },
              {
                name: 'item-7',
                active: true,
                pages: [
                  {
                    name: 'item-8',
                    path: '#!',
                    active: true
                  },
                  {
                    name: 'item-9',
                    active: true,
                    pages: [
                      {
                        name: 'item-10',
                        path: '#!',
                        active: true
                      },
                      {
                        name: 'item-11',
                        path: '#!',
                        active: true
                      }
                    ]
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  },
  {
    label: 'documentation',
    icon: UilDocumentLayoutRight,
    active: true,
    pages: [
      {
        name: 'getting-started',
        icon: 'life-buoy',
        path: '/documentation/getting-started',
        pathName: 'getting-started',
        active: true
      },
      {
        name: 'customization',
        icon: 'settings',
        dropdownInside: true,
        active: true,
        hasNew: true,
        pages: [
          {
            name: 'configuration',
            path: '/documentation/customization/configuration',
            pathName: 'doc-configuration',
            active: true
          },
          {
            name: 'color',
            path: '/documentation/customization/color',
            pathName: 'doc-color',
            active: true,
            new: true
          },
          {
            name: 'styling',
            path: '/documentation/customization/styling',
            pathName: 'doc-styling',
            active: true
          },
          {
            name: 'dark-mode',
            path: '/documentation/customization/dark-mode',
            pathName: 'doc-styling',
            active: true
          }
          // {
          //   name: 'plugin',
          //   path: 'documentation/customization/plugin',
          //   pathName: 'doc-plugin'
          // }
        ]
      },
      {
        name: 'design-file',
        icon: 'figma',
        path: '/documentation/design-file',
        pathName: 'doc-design-file',
        active: true
      },
      {
        name: 'changelog',
        icon: 'git-merge',
        path: '/changelog',
        pathName: 'changelog',
        active: true
      },
      {
        name: 'migrations',
        icon: 'fast-forward',
        path: '/migrations',
        pathName: 'migrations',
        active: true
      },
      {
        name: 'showcase',
        icon: 'monitor',
        path: '/showcase',
        pathName: 'showcase',
        active: true
      }
    ]
  }
];
