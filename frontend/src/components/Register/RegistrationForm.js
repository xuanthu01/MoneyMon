import React from 'react';
import { Form, Input, Tooltip, Select, Checkbox, Button } from 'antd';
import { QuestionCircleOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';

const { Option } = Select;
const formItemLayout = {
    labelCol: {
        xs: {
            span: 24,
        },
        sm: {
            span: 8,
        },
    },
    wrapperCol: {
        xs: {
            span: 24,
        },
        sm: {
            span: 16,
        },
    },
};
const tailFormItemLayout = {
    wrapperCol: {
        xs: {
            span: 24,
            offset: 0,
        },
        sm: {
            span: 16,
            offset: 8,
        },
    },
};

const RegistrationForm = () => {
    const [form] = Form.useForm();
    const onFinish = values => {
        console.log('Received values of form: ', values);
    };
    const prefixSelector = (
        <Form.Item name="prefix" noStyle>
            <Select
                style={{
                    width: 70,
                }}
            >
                <Option value="84">+84</Option>
                <Option value="85">+85</Option>
            </Select>
        </Form.Item>
    );
    return (
        <Form
        {...formItemLayout}
        form={form}
        name="register"
        onFinish={onFinish}
        scrollToFirstError
        >
        <Form.Item
            name="email"
            label="E-mail"
            rules={[
                {
                    type: 'email',
                    message: 'The input is not valid E-mail!',
                },
                {
                    required: true,
                    message: 'Please input your E-mail!',
                },
            ]}
        >
            <Input />
        </Form.Item>

        <Form.Item
            name="password"
            label="Password"
            rules={[
                {
                    required: true,
                    message: 'Please input a valid password!',
                    pattern: '',
                    len: 6
                },
            ]}
            hasFeedback
        >
            <Input.Password />
        </Form.Item>

        <Form.Item
            name="confirm"
            label="Confirm"
            dependencies={['password']}
            hasFeedback
            rules={[
                {
                    required: true,
                    message: 'Please confirm your password!',
                },
                ({ getFieldValue }) => ({
                    validator(rule, value) {
                        if (!value || getFieldValue('password') === value) {
                            return Promise.resolve();
                        }

                        return Promise.reject('The two passwords that you entered do not match!');
                    },
                }),
            ]}
        >
            <Input.Password />
        </Form.Item>

        <Form.Item
            name="nickname"
            label={
                <span>
                    Nickname&nbsp;
<Tooltip title="What do you want others to call you?">
                        <QuestionCircleOutlined />
                    </Tooltip>
                </span>
            }
            rules={[
                {
                    required: true,
                    message: 'Please input your nickname!',
                    whitespace: true,
                },
            ]}
        >
            <Input />
        </Form.Item>


        <Form.Item
            name="phone"
            label="Phone Number"
            rules={[
                {
                    required: true,
                    message: 'Please input your phone number!',
                },
            ]}
        >
            <Input
                addonBefore={prefixSelector}
                style={{
                    width: '100%',
                }}
            />
        </Form.Item>

        <Form.Item
            name="agreement"
            valuePropName="checked"
            rules={[
                {
                    validator: (_, value) =>
                        value ? Promise.resolve() : Promise.reject('Should accept agreement'),
                },
            ]}
            {...tailFormItemLayout}
        >
            <Checkbox style={{color: 'white' }}>
                I have read the <a href="">agreement</a>
            </Checkbox>
        </Form.Item>
        <Form.Item {...tailFormItemLayout}>
            <Button type="primary" htmlType="submit">
                Register
            </Button> or <Link to='/login'>Login now!</Link>
        </Form.Item>
    </Form>
    );
};
export default RegistrationForm;