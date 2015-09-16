package com.springsource.petclinic.web;
import org.gvnix.addon.geo.annotations.GvNIXMapViewer;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/map")
@GvNIXMapViewer(entityLayers = { com.springsource.petclinic.web.OwnerController.class }, projection = "EPSG3857")
public class MapController {
}
