import { DesktopOutlined, FileOutlined, PieChartOutlined, TeamOutlined,UserOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
const getRandomId = () => Math.random().toString(36).slice(2);
export const items = [
  {
    key: getRandomId(),
    icon: <PieChartOutlined />,
    label: 'Main',
  },
  {
    key: getRandomId(),
    icon: <PieChartOutlined />,
    label: <Link to='/' className='text-decoration-none'>Dashboard</Link>,
  },
  {
    key: getRandomId(),
    icon: <DesktopOutlined />,
    label: 'My Appointments',
  },
  {
    key: getRandomId(),
    icon: <DesktopOutlined />,
    label: 'Booking Request',
  },
  {
    key: getRandomId(),
    icon: <DesktopOutlined />,
    label: 'Pet Patients',
  },
  {
    key: getRandomId(),
    icon: <DesktopOutlined />,
    label: 'My Clients',
  },
  {
    key: getRandomId(),
    icon: <DesktopOutlined />,
    label: 'My Services',
  },
  {
    key: getRandomId(),
    icon: <UserOutlined />,
    label: 'My Team',
    children: [
      { key: getRandomId(), label: 'Tom', id: '3' },
      { key: getRandomId(), label: 'Bill', id: '4' },
      { key: getRandomId(), label: 'Alex', id: '5' },
    ],
  },

  {
    key: getRandomId(),
    icon: <FileOutlined />,
    label: 'Message',
  },
  {
    key: getRandomId(),
    icon: <FileOutlined />,
    label: 'Virtual Assistant',
  },
  {
    key: getRandomId(),
    icon: <FileOutlined />,
    label: 'Business',
  },
  {
    key: getRandomId(),
    icon: <FileOutlined />,
    label: 'Analytics',
  },
  {
    key: getRandomId(),
    icon: <FileOutlined />,
    label: 'E-Commerce',
  },
  {
    key: getRandomId(),
    icon: <FileOutlined />,
    label: 'Payment',
  },
  {
    key: getRandomId(),
    icon: <FileOutlined />,
    label: 'Subscriptions',
  },
  {
    key: getRandomId(),
    icon: <FileOutlined />,
    label: 'My Plan',
  },
  
];
