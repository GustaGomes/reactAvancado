import { Story, Meta } from '@storybook/react/types-6-0';
import Main from '.';

export default {
    title: 'Main',
    component: Main,
    args:{
        title:'Aqui eu deixo default para todos',
        description:'Aqui eu deixo default para todas as descriptions'
    }
} as Meta

export const Basic : Story = (args) => <Main { ...args }/>
Basic.args = {
    title:'Aqui local',
    description:'Aqui eu deixo local as descriptions'
}

export const Default : Story = (args) => <Main { ...args }/>