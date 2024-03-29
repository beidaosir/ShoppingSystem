package com.beidao.mall.order.mapper;


import com.beidao.mall.model.entity.order.OrderInfo;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface OrderInfoMapper {


    //添加数据到orderInfo表
    void save(OrderInfo orderInfo);


    //获取订单信息
    OrderInfo getById(Long orderId);


    //    //查询订单信息
    List<OrderInfo> findUserPage(Long userId, Integer orderStatus);



    //远程调用：根据订单编号获取订单信息
    OrderInfo getByOrderNo(String orderNo);


    //更新订单状态
    void updateById(OrderInfo orderInfo);
}
