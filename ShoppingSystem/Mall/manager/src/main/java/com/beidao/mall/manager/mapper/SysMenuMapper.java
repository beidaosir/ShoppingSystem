package com.beidao.mall.manager.mapper;

import com.beidao.mall.model.entity.system.SysMenu;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface SysMenuMapper {

    // 1、查询所有菜单 返回list集合
    List<SysMenu> findAll();

    //菜单添加
    void save(SysMenu sysMenu);

    //菜单修改
    void update(SysMenu sysMenu);

    //根据当前菜单id查询是否有子菜单
    int selectCountById(Long id);

    // 直接删除
    void delete(Long id);
}
